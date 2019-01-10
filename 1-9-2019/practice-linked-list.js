'use strict';

const LinkedList = require('/Users/fletcher/programming/codefellows/401/data-structures-and-algorithms/code-challenges/linked_list/linked-list.js').LinkedList;

const myList = new LinkedList();

myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);

function printList(list){
  if (!list.head){
    return;
  }
  let current = list.head;
  console.log(current.value);
  while(current.next){
    current = current.next;
    console.log(current.value);
  }
}

printList(myList);