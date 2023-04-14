import { makeAutoObservable } from "mobx";

export class ApplicationStore {
  counter = 0;
  timer: NodeJS.Timeout;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.counter += 1;
  };

  decrement = () => {
    this.counter -= 1;
  };

  autoIncrement = () => {
    this.increment();
    this.timer = setInterval(() => {
      this.increment();
    }, 1000);
  };

  cancelAutoIncrement = () => {
    clearInterval(this.timer);
  };
}
