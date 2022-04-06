import { defineComponent } from "vue";
import TodoList from "@/classes/TodoList";
import EditDialog from "@/components/EditDialog/EditDialog.vue";
import TodoForm from "@/components/TodoForm/TodoForm.vue";
import TodoTable from "@/components/TodoTable/TodoTable.vue";

export default defineComponent({
  components: { EditDialog, TodoForm, TodoTable },
  data() {
    return {
      addInputValue: "" as string,
      editId: "" as string,
      editInputValue: "" as string,
      todoList: new TodoList(),
    };
  },
  methods: {
    addTodo() {
      if (this.addInputValue) {
        this.todoList.addTodo(this.addInputValue);
        this.addInputValue = "";
      }
    },
    deleteTodo(id: string) {
      this.todoList.deleteTodo(id);
    },
    setEditId(id: string) {
      this.editId = id;
    },
    toggleStatus(id: string) {
      this.todoList.toggleStatus(id);
    },
    updateTask() {
      if (this.editId) {
        this.todoList.updateTask(this.editInputValue, this.editId);
        this.editId = "";
        this.editInputValue = "";
      }
    },
  },
  name: "App",
});
