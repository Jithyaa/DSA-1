function decrement(number){
    if(number===0){
    return;
}
    console.log(number)
    decrement(number-1);
}
decrement(10);