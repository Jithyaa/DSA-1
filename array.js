function result(arr,target){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return (arr[i],arr[j])

            }else{
                return null;
            }
        }
    }
}
console.log(result([1,2,4,5,6],2))