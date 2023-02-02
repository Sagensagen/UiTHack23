#![no_std]
#![no_main]

extern crate libc;

use core::arch::asm;
use core::panic::PanicInfo;

macro_rules! obfsbytes {
    ($buf:literal) => {{
        const KEY: [u8; { $buf.len() }] = get_key();
        const BUF: [u8; { $buf.len() }] = encrypt::<{ $buf.len() }>($buf, &KEY);
        decrypt(&BUF, &KEY)
    }};
}

const LOL: &[u8] = b"You wouldn't steal a car
You wouldn't steal a handbag
You wouldn't steal a television
You wouldn't steal a movie

Downloading pirated films is stealing,
stealing is against the law,
PIRACY. IT'S A CRIME

";

#[no_mangle]
pub extern "C" fn main(_argc: isize, _argv: *const *const u8) -> isize {
    write(1, LOL);
    write(1, b"Please insert licence key (XXXX-XXXX-XXXX-XXXX): ");
    let mut input: [u8; 19] = [0; 19];

    read(0, &mut input);

    if input.eq(&obfsbytes!(b"DEAD-CODE-BABE-BEEF")) {
        let flag = obfsbytes!(b"The flag is UiTHack23{sail_the_high_seas_pirate}\n");
        write(1, &flag);
    } else {
        write(
            1,
            b"Invalid licence provided. Please pay for our proprietary Garbage\xC2\xA9\n",
        );
    }

    exit(0);
    unreachable!();
}

const fn get_key<const LEN: usize>() -> [u8; LEN] {
    let mut key = [0; LEN];
    let mut i = 0;
    let mut val: u8 = 78;
    while i < LEN {
        key[i] = val;
        val = val.rotate_left(13) + 5;
        i += 1;
    }

    key
}

const fn encrypt<const LEN: usize>(plaintext: &[u8; LEN], key: &[u8; LEN]) -> [u8; LEN] {
    let mut ciphertext = [0; LEN];
    let mut i = 0;
    while i < LEN {
        ciphertext[i] = plaintext[i] ^ key[i];
        i += 1;
    }
    ciphertext
}

fn decrypt<const LEN: usize>(ciphertext: &[u8; LEN], key: &[u8; LEN]) -> [u8; LEN] {
    let mut plaintext = [0; LEN];
    plaintext
        .iter_mut()
        .enumerate()
        .for_each(|(i, b)| *b = ciphertext[i] ^ key[i]);
    plaintext
}

fn write(fd: usize, buf: &[u8]) -> usize {
    let args: [usize; 3] = [fd, buf.as_ptr() as usize, buf.len()];
    unsafe { syscall3(1, &args) }
}

fn read(fd: usize, buf: &mut [u8]) -> isize {
    let args: [usize; 3] = [fd, buf.as_mut_ptr() as usize, buf.len()];
    unsafe { syscall3(0, &args) as isize }
}

fn exit(code: usize) {
    unsafe { syscall1(60, code) };
    unreachable!()
}

#[panic_handler]
fn panic(_info: &PanicInfo) -> ! {
    exit(1);
    unreachable!();
}

unsafe fn syscall1(syscall: usize, arg1: usize) -> usize {
    let ret: usize;
    asm!("syscall",
         in("rax") syscall,
         in("rdi") arg1,
         lateout("rax") ret,
    );
    ret
}

unsafe fn syscall3(syscall: usize, args: &[usize; 3]) -> usize {
    let ret: usize;
    asm!("syscall",
         in("rax") syscall,
         in("rdi") args[0],
         in("rsi") args[1],
         in("rdx") args[2],
         lateout("rax") ret,
    );
    ret
}
