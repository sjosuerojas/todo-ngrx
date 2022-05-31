import { v4 as uuidv4 } from 'uuid';
export class Todo {
  public id: string;
  public text: string;
  public done: boolean;

  constructor(text: string) {
    this.id = uuidv4();
    this.text = text;
    this.done = false;
  }
}
