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

  public updateTask({
    id,
    title,
    completed,
  }: {
    id: string;
    title?: string;
    completed?: boolean;
  }): Task {
    const index = this.tasks.findIndex((t) => t.id === id);

    if (index === -1) {
      throw new Error("Task not found");
    }

    const updatedTask = {
      ...this.tasks[index],
      ...(title ? { title } : {}),
      ...(completed ? { completed } : {}),
    };

    this.tasks[index] = updatedTask;

    return updatedTask;
  }

  public deleteTasks() {
    this.tasks = [];
  }

  public deleteTask({ id }: { id: string }) {
    const index = this.tasks.findIndex((t) => t.id === id);

    if (index === -1) {
      throw new Error("Task not found");
    }

    this.tasks.splice(index, 1);
  }
}

export default new Store();
