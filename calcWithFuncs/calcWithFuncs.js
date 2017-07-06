function zero(num) {return num === undefined ? 0 : calculation(num, 0)}
function one(num) {return num === undefined ? 1 : calculation(num, 1);}
function two(num) {return num === undefined ? 2 : calculation(num, 2);}
function three(num) {return num === undefined ? 3 : calculation(num, 3);}
function four(num) {return num === undefined ? 4 : calculation(num, 4);}
function five(num) {return num === undefined ? 5 : calculation(num, 5);}
function six(num) {return num === undefined ? 6 : calculation(num, 6);}
function seven(num) {return num === undefined ? 7 : calculation(num, 7);}
function eight(num) {return num === undefined ? 8 : calculation(num, 8);}
function nine(num) {return num === undefined ? 9 : calculation(num, 9);}

function plus(func) {return {operand: '+', num: func};}
function minus(func) {return {operand: '-', num: func};}
function times(func) {return {operand: '*', num: func};}
function dividedBy(func) {return {operand: '/', num: func};}

function calculation(obj, num) {
  switch (obj.operand) {
    case '+':
      return obj.num + this.num;
      break;
    case '-':
      return this.num - obj.num;
      break;
    case '*':
      return this.num * obj.num;
      break;
    case '/':
      return this.num / obj.num;
      break;
    default:
      return "Not valid function";
  }
}
