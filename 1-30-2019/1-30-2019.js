'use strict';

// stack, in order
// queue, in order
// linked list, iterate and print
// tree, depth in, depth pre, depth post, breadth
const snq = require('/Users/fletcher/programming/codefellows/401/data-structures-and-algorithms/code-challenges/stacksAndQueues/stacks-and-queues.js');
const Stack = snq.Stack;
const Queue = snq.Queue;

const LinkedList = require('/Users/fletcher/programming/codefellows/401/data-structures-and-algorithms/code-challenges/linked_list/linked-list.js').LinkedList;

const treeFile = require('/Users/fletcher/programming/codefellows/401/data-structures-and-algorithms/code-challenges/tree/tree.js');
const BinaryTree = treeFile.BinaryTree;
const TreeNode = treeFile.Node;

// stack
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);

function emptyStack(stack) {
  while(stack.top){
    let popped = stack.pop();
    console.log(popped);
  }
}
// emptyStack(myStack);

// queue
const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);

function processQueue(queue){
  while(queue.front){
    let dequeued = queue.dequeue();
    console.log(dequeued);
  }
}
// processQueue(myQueue);

let myList = new LinkedList();

myList.insert(1);
myList.insert(2);
myList.insert(3);
myList.insert(4);
myList.insert(5);

function processList(list){
  let current = list.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

// processList(myList);

let myTree = new BinaryTree();

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);
let f = new TreeNode(6);

myTree.root = a;
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function breadthFirstSearch(tree){

  let myQueue = new Queue();
  let result = [];
  if (tree.root) {
    myQueue.enqueue(tree.root);
  }
  while (myQueue.front){
    let temp = myQueue.dequeue();
    if (temp.left) {myQueue.enqueue(temp.left)}
    if (temp.right) {myQueue.enqueue(temp.right)}
    result.push(temp.value);
  }
  return result;
}
// console.log(breadthFirstSearch(myTree));


// in order traversal
function inOrderBinaryTreeTraversal(tree){
  const results = [];
  function _go(node){
    if (node.left) (_go(node.left));
    results.push(node.value);
    if (node.right) (_go(node.right));
  }
  if(tree.root){
    _go(tree.root);
  }
  return results;
}
console.log(inOrderBinaryTreeTraversal(myTree));

// pre order traversal
function preOrder(tree){
  const results = [];
  function _go(node){
    results.push(node.value);
    if (node.left) (_go(node.left));
    if (node.right) (_go(node.right));
  }
  if(tree.root){
    _go(tree.root);
  }
  return results;
}
console.log(preOrder(myTree));

// post order traversal
function postOrder(tree){
  const results = [];
  function _go(node){
    if (node.left) (_go(node.left));
    if (node.right) (_go(node.right));
    results.push(node.value);
  }
  if(tree.root){
    _go(tree.root);
  }
  return results;
}
console.log(postOrder(myTree));