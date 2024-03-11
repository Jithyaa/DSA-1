class Node{
    constructor(value){
        this.value=value;
        this.next=value;
    }
}
class linked{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;

    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        let node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr=this.head;
            let listValue=" ";
            while(curr){
                listValue+=curr.value+" ";
                curr=curr.next;
            }
            console.log(listValue)
        }
    }
    

}
const list=new linked();
list.prepend(25)
list.prepend(24)
list.prepend(23)
list.prepend(22)
list.print();