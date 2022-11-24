// {
//   element: 1,
//   next: {
//     element: 2,
//     next: {
//       element: 3,
//       next: null,
//     } 
//   }
// }


class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertion(data) {
    const node = new Node(data);
    if(this.head === null){
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(data, index) {
    const node = new Node(data);
    const  current = this.head;
    let prev, curr = current, n = 0;

    if(index === 0) {
      this.head = node;
    } else {
      while(n < index) {
        n++;
        prev = curr;
        curr = curr.next;
      }
      node.next = curr;
      prev.next = node;
    }
    this.size++;
  }

  // insertAt(data, index) {
  //   const node = new Node(data);
  //   let current = this.head;
  //   let n = 0;
  //   let curr = current;
  //   let prev;

  //   while (n < index) {
  //     n++;
  //     prev = curr;
  //     curr = curr.next;
  //   }

  //   node.next = curr;
  //   prev.next = node;
  // }

  
  print() {
    let current = this.head;
    while(current){
      console.log(current.element);
      current = current.next;
    }
  }

}

const list = new LinkedList();
list.insertion(1)
list.insertion(2)
list.insertion(3)
list.insertAt(4, 1);
list.print();


















// function Node(element) {
//   this.element = element;
//   this.next = null;
// }

// function LinkedList() {
//   this.head = null;
//   this.size = 0;


//   this.add = function (data) {
//     const node = new Node(data);
//     let current;

//     if (this.head === null) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while(current.next) {
//         current = current.next;
//       }
//       // add node
//       current.next = node;
//     }
//     this.size++;
//   }

//   this.printNode = function () {
//     let current = this.head;
//     while (current) { 
//       console.log(current.element);
//       current = current.next;
//     }
      
//   }
// }

// const link = new LinkedList();
// link.add(100);
// link.add(200);
// link.printNode();


// function Node(element) {
//   this.data = element;
//   this.next = null;
// }

// function LinkedList () {
//   this.head = null;
//   this.size = 0;

//   this.insertNode = function (element) {
//     const node = new Node(element);
//     node.next = this.head;
//     this.head = node;
//   };

//   this.printNode = function () {
//     let current = this.head;
//     while(current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
    
// }

// const list = new LinkedList();
// list.insertNode(100);
// list.insertNode(200);
// list.printNode();