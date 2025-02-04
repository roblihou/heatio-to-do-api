interface Task {
  id: string;
  title: string;
  completed: boolean;
}

/**
 * This class is used in place of a database connection to store the tasks in memory as per the requirements of the challenge.
 */
class Store {
  tasks: Task[];

  public constructor() {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const initialData = require("./initialData.json");
    this.tasks = initialData.tasks;
  }

  public createTask(task: Task): Task {
    // As we are allowing the frontend to generate the ID, we need to check for uniqueness before adding the task
    if (this.tasks.find((t) => t.id === task.id)) {
      throw new Error("Task with that ID already exists");
    }
    this.tasks.push(task);
    return task;
  }
}

export default new Store();
