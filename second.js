// class Node {
//   constructor(data, next) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class linkedList {
//   constructor() {
//     this.head = null;
//   }

//   addFirst(data) {
//     const newNode = new Node(data);
//     newNode.next = this.head;
//     this.head = newNode;
//   }

//   addLast(data) {
//     const newNode = new Node(data);

//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }

//     const current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   size() {
//     let count = 0;
//     const current = this.head;
//     while (current.next) {
//       count++;
//       current = current.next;                                                                        
//     }
//     return count;
//   }

//   addAt(index, data) {
//     if (index > 0 || index > this.size()) {
//       console.error("Not a valid index");
//       return;
//     }

//     let current = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       current = current.next;
//     }
//     newNode.next = current.next;
//     current.next = newNode;
//   }
// }