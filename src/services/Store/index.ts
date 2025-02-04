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
}

export default new Store();
