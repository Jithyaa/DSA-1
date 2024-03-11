class Node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.next=null;
    }
}
class linked{
    constructor(){
        this.tail=null;
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        this.size;
    }
    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.prev=this.tail;
            this.tail=node;
        }
        this.size++;
        
    }
    prepend(value){
        let node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            node.next=this.head;
            this.head.prev=node;
            this.head=node;
        }
    }
    print(){
        if(this.isEmpty()){
            return;
        }else{
            let curr=this.head;
            let listValue=" ";
            while(curr){
                listValue+=`${curr.value} `;
                curr=curr.next;
            }
            listValue+=" ";
            console.log(listValue);

        }
    }
}
let list=new linked();
list.append(4);
list.append(5);
list.append(6);
list.prepend(3);
list.prepend(2);
list.prepend(1);
list.print()