import { defineComponent } from 'vue';
import TodoList from "@/classes/TodoList";
import TodoForm from '@/components/TodoForm/TodoForm.vue';

export default defineComponent({
  components: { TodoForm },
  data() {
    return {
      addInputValue: "" as string,
      editId: "" as string,
      editInputValue: "" as string,
      todos: new TodoList(),
    };
  },
  methods: {
    addTodo() {
      this.todos.addTodo(this.addInputValue);
      this.addInputValue = "";
    },
    closeDialog() {
      this.editId = "";
    },
    updateTodo(id: string) {
      this.todos.updateTodo(this.editInputValue, id);
      this.editId = "";
      this.editInputValue = "";
    },
  },
  name: 'App',
});
