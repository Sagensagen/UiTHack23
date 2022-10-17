#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void ignore_me(){
  setvbuf(stdin, NULL, _IONBF, 0);
  setvbuf(stdout, NULL, _IONBF, 0);
  setvbuf(stderr, NULL, _IONBF, 0);
}

void photograph(){
  puts("So you can keep me");
  puts("Inside the pocket of your ripped jeans");
  puts("Holding me closer 'til our eyes meet");
  puts("You won't ever be alone");
}

void lose_yourself(){
  puts("You better lose yourself in the music");
  puts("The moment, you own it, you better never let it go");
  puts("You only get one shot, do not miss your chance to blow");
  puts("This opportunity comes once in a lifetime");
}

void mamma_mia(){
  puts("Mamma mia, here I go again");
  puts("My my, how can I resist you?");
  puts("Mamma mia, does it show again?");
  puts("My my, just how much I've missed you");
}

void call_me_maybe(){
  char chr;
  FILE *f = fopen("flag.txt", "r");

  chr = fgetc(f);
  while(chr != EOF){
    printf("%c", chr);
    chr = fgetc(f);
  }
  fclose(f);
}

int main(){
  ignore_me();
  char song[30];
  puts("Welcome to UiT's MP3 Player!\n");
  puts("Please choose the name of the song you want to play:\n");
  puts("1. Photograph - Nickelback\n2. Lose Yourself - Eminem\n3. Mamma Mia - ABBA");
  gets(song);

  if(!strcmp(song, "Photograph")){
    photograph();
  }
  else if(!strcmp(song, "Lose Yourself")){
    lose_yourself();
  }
  else if(!strcmp(song, "Mamma Mia")){
    mamma_mia();
  }
  else {
    puts("Could not play the requested song");
  }
  return 0;
}
