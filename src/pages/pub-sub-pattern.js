function Subject() {
  this.observers = [];
}

Subject.prototype = {
  getIndex: function (observer) {
    return this.observers.indexOf(observer)
  },
  subscribe: function (observer) {
    return this.observers.push(observer);
  },
  unsubscribe: function (observer) {
    this.observers = this.observers.filter((x) => x !== observer);
  },
  notify: function (observer) {
    let index = this.getIndex(observer)
    if (index > -1) {
      this.observers[index].notify();
    }
  },
  notifyAll: function () {
    this.observers.forEach(x => x.notify())
  },
  count: function () {
    return this.observers.length;
  }
}

function Observer(id) {
  return {
    id,
    notify: function () {
      console.log(`Observer ${id} has been notified`)
    }
  }
}

const obs1 = new Observer(1);
// obs1.notify()
const sub = new Subject();

console.log(sub);
sub.subscribe(obs1);
sub.notifyAll();