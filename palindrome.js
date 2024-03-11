function palindrome(str){
    if(str.length<2)
        return true;
        if(str.charAt(0)===str.charAt(str.length-1)){
            return palindrome(str.slice(1,string.length-1))
        }
        return false;

}
console.log(palindrome('m','a','l','a','y','a','l','a','m'));
console.log(palindrome('h','i'));
