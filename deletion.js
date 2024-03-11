function deletion(arr,pos){
    for(let i=0;i<arr.length-1;i++){
        if(pos<=0 || pos>=arr.length){
            return 'invalid';
    }
    for(let i=pos-1;i<arr.length-1;i++){
        a[i]=a[i+1];
        arr.length--;
        return a[i];
    }
    }
}
console.log((deletion)[2,3,4,5],2);
