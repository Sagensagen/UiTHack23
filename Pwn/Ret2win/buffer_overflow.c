#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void ignore_me(){
  setvbuf(stdin, NULL, _IONBF, 0);
  setvbuf(stdout, NULL, _IONBF, 0);
  setvbuf(stderr, NULL, _IONBF, 0);
}

void call_me_to_win(){
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
  char message[60];
  puts("Enter some nostalgic message here:");
  gets(message);
  return 0;
}
