let arr=[2,3,4,5,6,7];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        arr.splice(i,1);
        i--;
    }
}
console.log(arr);