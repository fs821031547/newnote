//
function Node(element) {
  this.element = element;
  this.next = null;
}

function List() {
  this.head = new Node('head');
}
List.prototype = {
  find(item) {
    var currentNode = this.head;
    while (currentNode.element != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  },
  insert(newItem, item) {
    var nextNode = new Node(newItem);
    var currentNode = this.find(item);
    nextNode.next = currentNode.next;
    currentNode.next = nextNode;
  },
  findPrevNode(item) {
    var currentNode = this.head;
    while (currentNode.next && currentNode.next.element != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  },
  remove(item) {
    var prevNode = this.findPrevNode(item);
    var currentNode = this.find(item);
    prevNode.next = currentNode.next;
    currentNode.next = null;
  },
  edit() {},
  display() {
    var currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      console.log('node:', currentNode.element);
    }
  },
};

var list = new List();
list.insert('link', 'head');
list.insert('zhangsan', 'link');
list.insert('lisi', 'zhangsan');
list.display();
list.remove('zhangsan');
list.insert('zhangsan', 'link');
list.insert('wangwu', 'lisi');
list.insert('maliu', 'wangwu');

list.display();
list.remove('wangwu');
list.display();
