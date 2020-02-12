// On(log(n))
let array = [5,2,3,4,1]

function quicksort(array, start = 0, end = array.length) {
  if(start >= end) {
    return array; 
    //base case
  }
  const middle = partition(array, start, end);
  array = quicksort(array, start, middle);
  array = quicksort(array, middle + 1, end);

  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1]; // 4
  let j = start; // starting index, 1
  for(let i = start; i < end -1; i++) { //for loop goes to pivot
    if(array[i] <= pivot) {  // if array index is less or euqal equal to pivot
      swap(array, i, j); // switch current index with starting index 
      j++; // j goes to next index 
    }
  }
  swap(array, end -1, j); // swap pivot with j

  return j;
}

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

//partition(array, 0 , 4)
swap(array, 0, 4)


//merge sort 

function mergeSort(array) {
  if(array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length/2) 
  let left = array.slice(0,middle); 
  let right = array.slice(middle, array.length);

  left = mergeSort(left)
  right = mergeSort(right)

  return merge(left, right, array)
}


function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) { // while each index is less than the length 
        if (left[leftIndex] < right[rightIndex]) { // which ever one is less, add to the output
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};


mergeSort(array)

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