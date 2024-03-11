class Node{
    constructor(value){
        this.value=value
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

isEmpty(){
   return this.size===0;
}
getSize(){
    return this.size;
}
append(value){
const node=new Node(value);
if(this.isEmpty()){
   this.head=node;
   this.tail=node;
}else{
    this.tail.next=node;
    this.tail=node;
}
this.size++;
}

print(){
    if(this.isEmpty()){
        console.log("Empty");
    }else{
        let curr=this.head;
        let listValues='';
        while (curr) {
                listValues+=`${curr.value}`;
                listValues+=" "
                curr=curr.next
        }
        console.log(listValues);
    }
}

}
const list=new linkedList();
let arr=[10,20,30,40];
for(let i=0;i<arr.length;i++){
     list.append(arr[i]);
}
list.print();





