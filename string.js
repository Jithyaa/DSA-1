function binary(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(arr[middle]===target){
            return middle;
        }
        if(target<arr[middle]){
            right=middle-1;
        }else{
            left=middle+1;
        }
    }
}
console.log(binary([1,2,3,4],2));