class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class linked{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size;
    }
    append(value){
        let node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=this.tail.next;
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
            this.head=node;
        }
        this.size++
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return;
        }
        if(index==0){
            this.prepend(value);
        }else{
            let node=new Node(value);
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next;
            }
            node.next=prev.next;
            prev.next=node;
            this.size++
        }
    }
    remove(index){
        if(index<0 || index>this.size){
            return;
        }
        if(index==0){
            let removeNode=this.head;
            this.head=this.head.next;
        }else{
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next;
            }
           let removeNode=prev.next;
            prev.next=removeNode.next;

        }
        this.size--;
    }
    reverse(){
        let prev=null;
        let curr=this.head;
        while(curr){
            let next=curr.next;
            curr.next=prev;
            prev=next;
            curr=next;
        }
        this.head=prev;
    }
    print(){
        if(this.isEmpty()){
            return;
        }else{
            let curr=this.head;
            let listValue=" ";
            while(curr){

                listValue+= `${curr.value} `;
                curr=curr.next;
            }
            listValue+=" ";
            console.log(listValue)
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
list.insert(8,2)
list.remove(2)
list.print()