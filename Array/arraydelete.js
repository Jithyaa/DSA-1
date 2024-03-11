function deleteA(arr,target){
    let length=arr.length;
    for(let i=0;i<length;i++){
        if(arr[i]===target){
            for(let j=i+1;j<length;j++){
                arr[i]=arr[j];
                i++;
            }
            length--;
        }
    }arr.length=length;


}
let result=deleteA([2,3,4,5],4);
console.log(result);