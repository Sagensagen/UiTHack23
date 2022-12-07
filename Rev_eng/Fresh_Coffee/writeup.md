># Rev Eng - Fresh Coffee
>
>> Rev Eng - 100pts
>
>I was making a java program to generate a key for my program. I was so tired that I forgot to add the flag to the program. Can you help me find the flag?
>
> Tips:
> Decompile the java file and look for the flag.

## Writeup

The challenge gives us a java file, which we can decompile using a java decompiler such as [jdec](https://jdec.app/). Which gives us the following code:

```java
import java.util.Scanner;

class Keygen {
    public static void main(String args[]) {
        Keygen keygen = new Keygen();
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter secret key: ");
        String userInput = scanner.next();
        String input = userInput.substring("UiTHack23{".length(),userInput.length()-1);
        if (keygen.checkPassword(input)) {
            System.out.println("Correct key.");
        } else {
            System.out.println("Wrong key!!");
        }
    } 
    // Password should be "UiTHack23{d0nT_t3ll_m3_y0u_us3d_brut3_f0rc3}"
    public boolean checkPassword(String password) {
        return password.length() == 33 &&
                password.charAt(2) == 'n' &&
                password.charAt(28) == 'f' &&
                password.charAt(3) == 'T' &&
                password.charAt(12) == '_' &&
                password.charAt(29) == '0' &&
                password.charAt(6) == '3' &&
                password.charAt(24) == 'u' &&
                password.charAt(16) == '_' &&
                password.charAt(8) == 'l' &&
                password.charAt(0) == 'd' &&
                password.charAt(10) == 'm' &&
                password.charAt(9) == '_' &&
                password.charAt(11) == '3' &&
                password.charAt(13) == 'y' &&
                password.charAt(23) == 'r' &&
                password.charAt(30) == 'r' &&
                password.charAt(15) == 'u' &&
                password.charAt(14) == '0' &&
                password.charAt(1) == '0' &&
                password.charAt(17) == 'u' &&
                password.charAt(20) == 'd' &&
                password.charAt(31) == 'c' &&
                password.charAt(18) == 's' &&
                password.charAt(19) == '3' &&
                password.charAt(21) == '_' &&
                password.charAt(5) == 't' &&
                password.charAt(22) == 'b' &&
                password.charAt(4) == '_' &&
                password.charAt(25) == 't' &&
                password.charAt(27) == '_' &&
                password.charAt(7) == 'l' &&
                password.charAt(26) == '3' &&
                password.charAt(32) == '3';
    }
}
```

We can see that the password is checked by a series of `charAt` checks. Now we just reverse the logic and get the flag.

```bash
Flag: UiTHack23{d0nT_t3ll_m3_y0u_us3d_brut3_f0rc3}
```
