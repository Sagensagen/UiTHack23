># Rev Eng - Fresh Coffee
>
>> Rev Eng - 100pts
>
>I wrote a [program](Keygen.class) to start the coffee machine. I was so tired that I forgot the key to start the machine. Can you help me find the key?
>
> Tips:
> Decompile the java file and look for the flag.

## Writeup

The challenge gives us a java file, which we can decompile using a java decompiler such as [jdec](https://jdec.app/). Which gives us the following code:

```java
/* Decompiler 12ms, total 497ms, lines 21 */
import java.util.Scanner;

class Keygen {
   public static void main(String[] var0) {
      Keygen var1 = new Keygen();
      Scanner var2 = new Scanner(System.in);
      System.out.print("Enter secret key: ");
      String var3 = var2.next();
      if (var1.checkPassword(var3)) {
         System.out.println("Correct key UiTHack23{" + var3 + "}");
      } else {
         System.out.println("Wrong key!!");
      }

   }

   public boolean checkPassword(String var1) {
      return var1.length() == 33 && var1.charAt(2) == 'n' && var1.charAt(28) == 'f' && var1.charAt(3) == 'T' && var1.charAt(12) == '_' && var1.charAt(29) == '0' && var1.charAt(6) == '3' && var1.charAt(24) == 'u' && var1.charAt(16) == '_' && var1.charAt(8) == 'l' && var1.charAt(0) == 'd' && var1.charAt(10) == 'm' && var1.charAt(9) == '_' && var1.charAt(11) == '3' && var1.charAt(13) == 'y' && var1.charAt(23) == 'r' && var1.charAt(30) == 'r' && var1.charAt(15) == 'u' && var1.charAt(14) == '0' && var1.charAt(1) == '0' && var1.charAt(17) == 'u' && var1.charAt(20) == 'd' && var1.charAt(31) == 'c' && var1.charAt(18) == 's' && var1.charAt(19) == '3' && var1.charAt(21) == '_' && var1.charAt(5) == 't' && var1.charAt(22) == 'b' && var1.charAt(4) == '_' && var1.charAt(25) == 't' && var1.charAt(27) == '_' && var1.charAt(7) == 'l' && var1.charAt(26) == '3' && var1.charAt(32) == '3';
   }
}
```

We can see that the password is checked by a series of `charAt` checks. Now we just reverse the logic and get the flag.

```bash
Flag: UiTHack23{d0nT_t3ll_m3_y0u_us3d_brut3_f0rc3}
```
