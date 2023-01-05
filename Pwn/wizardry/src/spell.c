#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

void ignore_me(){
  setvbuf(stdin, NULL, _IONBF, 0);
  setvbuf(stdout, NULL, _IONBF, 0);
  setvbuf(stderr, NULL, _IONBF, 0);
}

void print_flag(){
  char chr;
  FILE *f = fopen("flag.txt", "r");
  chr = fgetc(f);
  while(chr != EOF){
    printf("%c", chr);
    chr = fgetc(f);
  }
  fclose(f);
  exit(EXIT_SUCCESS);
}

int main(){
  ignore_me();
  char buffer[40];

  signal(SIGSEGV, print_flag);

  printf("Cast a spell:\n>> ");
  fgets(buffer, 100, stdin);
  printf("%s", buffer);

  return 0;
}
