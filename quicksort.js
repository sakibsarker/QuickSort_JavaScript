const prompt=require("prompt-sync")();
function quicksort(num=[25],first,last){
let i,j,pivot,temp;
if(first<last){
    pivot=first;
    i=first;
    j=last;
    while(i<j){
        while(num[i]<=num[pivot]&&i<last){
            i++;
        }
        while(num[j]>num[pivot]){
            j--;
        }
        if(i<j){
            temp=num[i];
            num[i]=num[j];
            num[j]=temp;
        }
    }
    temp=num[pivot];
    num[pivot]=num[j];
    num[j]=temp;
    quicksort(num,first,j-1);
    quicksort(num,j+1,last);
}
}
let i,count,num=[25];
count=prompt("Enter How Many Input need : ");
console.log("Enter "+count+" Elements : ");
for(i=0;i<count;i++){
    num[i]=prompt();
}
quicksort(num,0,count-1);
console.log("Number is sorted: ");
for(i=0;i<count;i++){
    console.log(num[i]);
}