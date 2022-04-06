import { getId } from "../helpers";
import Todo from "../types/Todo";

class TodoList {
  public todos: Array<Todo> = [];

  addTodo(task: string): void {
    const id: string = getId();
    const newTodo = { id, isDone: false, task };
    this.todos.push(newTodo);
  }

  deleteTodo(targetId: string): void {
    this.todos = this.todos.filter(({ id }: { id: string }) => id !== targetId);
  }

  getTodos(): Array<Todo> {
    return this.todos;
  }

  toggleStatus(targetId: string): void {
    this.todos = this.todos.map((todo: Todo) => {
      const { id, isDone, task } = todo;
      if (id === targetId) {
        return { id, isDone: !isDone, task };
      }
      return todo;
    });
  }

  updateTask(newTask: string, targetId: string): void {
    this.todos = this.todos.map((todo: Todo) => {
      const { id, isDone } = todo;
      if (id === targetId) {
        return { id, isDone, task: newTask };
      }
      return todo;
    });
  }
}

export default TodoList;
