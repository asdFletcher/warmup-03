
const LinkedList = require('/Users/fletcher/programming/codefellows/401/data-structures-and-algorithms/code-challenges/linked_list/linked-list.js').LinkedList;

let myList = new LinkedList();

myList.append(5);
myList.append(10);
myList.append(15);
myList.append(20);
myList.append(25);


function iterate(list){
  let current = list.head;
  while (current.next !== null){
    console.log(current.value);
    current = current.next;
  }
}

iterate(myList);
