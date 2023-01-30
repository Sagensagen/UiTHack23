> # Pwn - Ollivanders
> > Pwn - 100pts
>
> Before you go to Hogwarts you need to buy yourself a proper wand. <br>
> Visit Mr. Ollivander's shop and see if he has something interesting to sell you!
>
> [Files](src/ollivanders)
>
> You can connect to *Ollivanders* with netcat
> ```bash
> $ nc motherload.td.org.uit.no 8008
> ```

## Writeup
Looking at the source code we can see that we can only buy items from the shop. We do not have enough galleons to buy the flag, but we can buy a wand for 7g. <br>

Buying the *Holly wand* we are prompted with
```
How many would you like to buy?
```
Looking at the source code we can see that our input is multiplied with the price, and subtracted from our galleons amount
```c
if(item == 1){
  amount = buy_amount();
  if((galleons - 7 * amount) < 0){
    puts("Not enough galleons!\n");
    return galleons;
  }
  galleons -= 7 * amount;
  puts("\nYou have purchased the Holly wand!");
}
```
We can input any amount as there is no check for it
```c
int buy_amount(){
  int amount;
  puts("\nHow many would you like to buy?");
  printf(">> ");
  if(scanf("%d", &amount) == 0)
    exit(0);
  return amount;
}
```
This means that we can input a negative number to get more galleons, becuase of how to program calculates the new galleons amount

```
You have 20g

What item would you like to buy?
1. Holly wand      7g
2. Flag            50g
>> 1

How many would you like to buy?
>> -10
You have purchased the Holly wand!

You have 90 galleons

What item would you like to buy?
1. Holly wand      7g
2. Flag            50g
>> 2
You have purchased the flag!

UiTHack23{Why_w0uld_y0u_buy_4_n3gat1ve_am0un7?}
```
```
UiTHack23{Why_w0uld_y0u_buy_4_n3gat1ve_am0un7?}
```
