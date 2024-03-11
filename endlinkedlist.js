class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class linked{
    constructor(){
        this.head=null;
        this.tail=null
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
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
            this.tail=this.tail.next
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
    calculateSumOfLastTwo() {
        if (this.size < 2) {
          console.log('Not enough elements to calculate the sum.');
          return null;
        }
    
        let firstLast = this.head;
        let secondLast = null;
        let current = this.head;
    
        while (current.next) {
          secondLast = current;
          current = current.next;
        }
    
        const sum = firstLast.value + secondLast.value;
        console.log('Sum of last two elements:', sum);
        return sum;
      }
    


}
    const list=new linked()
    list.append(20);
    list.append(21);
    list.append(22);
    list.append(23);
    list.append(24);
    list.print();
    list.calculateSumOfLastTwo();



