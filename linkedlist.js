class LinkedList {
    constructor() {
      this.head = null
    }
  
    getAt(index) {
      let counter = 0;
      let node = this.head;
      while(node) {
        if(counter === index) {
          return node;        
        }
        counter++;
        node = node.next;
      }
      return null;
    }
  
  
    prepend(value) {
      this.head = new _Node(value, this.head);
    }
  
    insertBefore(data, index) {
      //takes value and counts to where it needs inserted
      if(!this.head) {
        this.head = new _Node(data, null);
        return;
      }
  
      if(index === 0) {
        this.head = new _Node(data, this.head);
        return;
      }
  
      const previous = this.getAt(index - 1);
      let newNode = new _Node(data);
      newNode.next = previous.next;
      previous.next = newNode;
  
      return this.head
    }
  
    insertAfter(data,index) {
      if(!this.head) {
        this.head = new _Node(data, null);
        return;
      }
  
      if(index === 0) {
        this.head = new _Node(data, this.head);
        return;
      }
  
      const currNode = this.getAt(index);
      let newNode = new _Node(data);
      newNode.next = currNode.next;
      currNode.next = newNode;
  
      return this.head
  
    }
  
    append(value) {
      if(this.head === null) {
        this.prepend(value);
      } else {
        let tempNode = this.head;
        while (tempNode.next) {
          tempNode = tempNode.next;
        }
        tempNode.next = new _Node(value, null);
      }
    }
  
    search(value) {
      let currNode = this.head;
  
      if(!this.head) {
        return null;
      }
  
      while(currNode.value !== value) {
        if(currNode.next === null) {
          //if theres nothing left, return null
          return null;
        }
        else {
          //if theres more, go to the next one
          currNode = currNode.next;
        }
      }
      return currNode;
    }
  
    delete(value) {
      if(!this.head){
        //the list has no length
        return null;
      }
  
      if(this.head.value === value) {
        // change the beginning to the next head
        this.head = this.head.next;
        return;
      }
  
      let currNode = this.head;
      let prevNode = this.head; 
  
      while((currNode !== null) && (currNode.value!== value)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log('Item not found');
        return;
      }
      previousNode.next = currNode.next
    }
  
  }
  
  class _Node {
    constructor(value,next) {
      this.value = value
      this.next = next || null
    }
  }
  
  
  const SLL = new LinkedList()
  
  SLL.append('Apollo')
  SLL.append('Boomer')
  SLL.append('Helo')
  SLL.append('Starbuck')
  
  
  // SLL.insertBefore('Mooflet', 0)
  SLL.insertAfter('BangBang',1)
  
  
  SLL.search('BangBang')
  
  
  
  