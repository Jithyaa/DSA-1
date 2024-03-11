function reverse(arr){
    let lastIndex=arr.length-1;
    for(let i=0;i<arr.length/2;i++){
        temp=arr[lastIndex-i];
        arr[lastIndex-i]=arr[i];
        arr[i]=temp;
    }
    return arr;
 }
 console.log(reverse([2,3,5,1,7]));