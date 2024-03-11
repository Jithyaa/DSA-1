function linear(ar,target){
    for(let i=0;i<ar.length;i++){
        if(ar[i]===target){
            return i ;
        }
    }
    return "invalid";
     
}
console.log(linear([1,3,4,5,6],10))
console.log(linear([1,3,10,5,6],10))



