class Stack {

    constructor(max) {
      this.top=-1;
      this.max = max;
      this.a = [];
      this.a.length = max;
    }
  
    push(x) {
      if(this.top>=this.max) return false;
      
      this.a[++this.top] = x;
      return true;
    }
    pop(x) {
        if(this.top<0)
        return false;

        x = this.a[this.top--];
        return x;

      }

  }
  
  let first = new Stack(10);
  first.push(5);
  first.push(7);
  first.push(3);
  var value = first.pop();
  var value = first.pop();
  var value = first.pop();
 
  console.log(value);
