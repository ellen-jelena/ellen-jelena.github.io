class Counter {

  constructor(init) {
    if(init === undefined) {
      init = 0;
    }
    this.count = init;
  }
  
  increment() {
    this.count++;
    return this;
  }
  
  decrement() {
    this.count--;
    return this;
  }
  
  reset() {
    this.count = 0;
    return this;
  }
  
  set(value) {
    this.count = value;
  }
  
  get() {
    return this.count;
  }
  
  info() {
    console.log(this);
  }
  
  static copy(old) {
    let r = new Counter();
    if(old instanceof Counter) {
      r.set(old.get());
    }
    return r;
  }

}

let b1 = new Counter(42);
let b2 = Counter.copy(b1);

b2.reset();

b1.info();
b2.info();
