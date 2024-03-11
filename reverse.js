function reverse(string){
    let arr = string.split("");
    let length= arr.length -1;
    for(let i = 0; i< arr.length/2; i++){
        [arr[i],arr[length-i]] = [arr[length-i],arr[i]]
    }
        return arr.join("");
}

let nam = reverse("HELLO");

console.log(nam);
