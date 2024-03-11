function binary(ar,target){
   let left=0;
   let right=ar.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(target===ar[middle]){
            return middle

        }
        if(target<ar[middle]){
            right=middle-1;
        }else{
            left=middle+1
        }

    }
    return false;


}
console.log(binary([-2,2,3,4,6,8,10],10))
console.log(binary([-2,2,3,4,6,8,10],15))



