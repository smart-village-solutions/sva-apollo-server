const queueArray: string[] = [];

function* queue() {
  while (true) {
    if (queueArray.length) {
      yield queueArray.pop();
    } else {
      yield;
    }
  }
}

const queueInstance = queue();

const fetchQueue = {
  add: (...rest: string[]) => queueArray.unshift(...rest),
  next: () => queueInstance.next().value,
};
