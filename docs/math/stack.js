function Stack() {
  var items = [];
  this.push = (item) => {
    items.push(item);
  };
  this.pop = () => {
    return items.pop();
  };
  this.peek = () => {
    return items[items.length - 1];
  };
  this.isEmpty = () => {
    // return items[0] ? false : true; // 此处不能这样判断，会存在items[0]为0的情况，导致结果为空，实际栈内是有元素的
    return items.length === 0;
  };
  this.clear = () => {
    items = [];
  };
  this.size = () => {
    return items.length;
  };
  this.display = () => {
    console.log(items.join());
  };
}

var stack = new Stack();
stack.push('f');
stack.push('a');
stack.push('b');
stack.display();
stack.peek();
stack.pop();
stack.display();

// 十进制转二进制
// 封装十进制转二进制的函数
function dec2bin(decNumer) {
  // 定义变量
  var stack = new Stack();
  var remainder;

  // 循环除法
  while (decNumer > 0) {
    remainder = decNumer % 2;
    decNumer = Math.floor(decNumer / 2);
    stack.push(remainder);
  }

  // 将数据取出
  var binayriStrng = '';
  while (!stack.isEmpty()) {
    binayriStrng += stack.pop();
  }
  return binayriStrng;
}

// alert(dec2bin(10))
// alert(dec2bin(233))
// alert(dec2bin(1000))
