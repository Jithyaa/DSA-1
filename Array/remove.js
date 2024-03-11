function remove(arr,target){
  let size=arr.length;
  for(let i=0;i<size;i++){
    if(arr[i]===target){
      let k=i;
      for(let j=k+1;j<size;j++){
        arr[k]=arr[j];
        k++
      }
      size--;
      i--;
    }
  }
  arr.length=size;
  return arr

}
let result=remove([2,3,4,4,5],5);
console.log(result);