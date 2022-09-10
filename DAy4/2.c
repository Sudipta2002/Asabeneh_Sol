#include<stdio.h>

int main(){

    char* s="abcdefg";
    char *ptr=s;
    ptr+=5;
    // s+=5;
    printf("%c\n",*ptr); // --> f
    printf("%s\n",ptr); // --> fg
    printf("%s",*s); // a
    
    return 0;
}