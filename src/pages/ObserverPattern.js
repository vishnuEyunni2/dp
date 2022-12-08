

function Subject() {
  this.observers = []
}

Subject.prototype = {
  getIndex: function (observer) {
    return this.observers.indexOf(observer)
  },
  subscribe: function (observer) {
    this.observers.push(observer)
  },
  unsubscribe: function (observer) {
    this.observers = this.observers.filter(item => item !== observer)
  },
  notify: function (observer) {
    let observerIndex = this.getIndex(observer);
    if (observerIndex > -1) {
      this.observers[observerIndex].notify(observerIndex)
    }
  },
  notifyAll: function () {
    this.observers.forEach(observer => {
      observer.notify()
    })
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

const subject = new Subject();
const observer1 = new Observer(1);
const observer2 = new Observer(2);

observer1.notify();
observer2.notify();