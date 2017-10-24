class Task {
  done: boolean = false;
  description: string;
  priority: string;

  constructor(public description: string, public priority : string){
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);
