class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }    
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

   isEmpty(){
    return this.size === 0
   } 

   getSize(){
    return this.size;
   }

     prepend(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else{
            node.next = this.head;
            this.head= node;
        }this.size++
     }
    
     insert(value, index){
        if(index < 0 || index > this.size){
            return;
        }
        if(index == 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head;
                for(let i = 0; i< index -1; i ++){
                    prev = prev.next;
                } 
                 node.next = prev.next; 
                prev.next = node;
                this.size++;
        }
     }
        print(){
            if(this.isEmpty()){
                console.log("list is empty");
            }else{
                let curr = this.head;
                let listValues = " ";
                while(curr){
                    listValues+=curr.value +" ";
                    curr = curr.next
                }  console.log(listValues)
            } 
        }
     }


    const list = new linkedList();
    list.prepend(18);
    list.prepend(16);
    list.prepend(10);
    list.insert(25,3);
    list.print();