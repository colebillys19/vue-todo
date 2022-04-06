import { defineComponent } from "vue";

export default defineComponent({
  name: "TableRow",
  props: {
    deleteTodo: Function,
    id: String,
    isDone: Boolean,
    isEditing: Boolean,
    setEditId: Function,
    task: String,
    toggleStatus: Function,
  },
});
