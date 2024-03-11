let duplicate=function(num){
    let index=1;
    for(let i=0;i<num.length-1;i++){
        if(num[i]==num[i+1]){
            num[index]=num[i+1]
            index++;
           

        }
       
    }
    num.length--;
    return num;
   

};
console.log(duplicate([1,2,2,3,4]));