'use strict';

const LinkedList = require('/Users/fletcher/programming/codefellows/401/data-structures-and-algorithms/code-challenges/linked_list/linked-list.js').LinkedList;

let ll = new LinkedList();

ll.insert(5)
ll.insert(2)
ll.insert(7)
ll.insert(4)

function traverseLL(list) {
  let current = list.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

// traverseLL(ll);

const Queue = require('/Users/fletcher/programming/codefellows/401/data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js').Queue;

let myQ = new Queue();
myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
myQ.enqueue(4);

function readQ(q){

  while(q.front){
    console.log(q.front.value);
    q.dequeue();
  }
}
// readQ(myQ);


const Stack = require('/Users/fletcher/programming/codefellows/401/data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js').Stack;

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

function readStack(stack){
  while(stack.top){
    console.log(stack.top.value);
    stack.pop();
  }
}
readStack(myStack);




