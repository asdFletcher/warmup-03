'use strict';

const Queue = require('/Users/fletcher/programming/codefellows/401/data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js').Queue;

// console.log(Queue);

let myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(7);

function dequeueAndPrint(queue){

  while (queue.front){
    console.log(queue.dequeue());
  }
}

dequeueAndPrint(myQueue);