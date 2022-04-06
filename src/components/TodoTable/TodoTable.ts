import { defineComponent } from "vue";
import TableRow from "./TableRow/TableRow.vue";

export default defineComponent({
  components: { TableRow },
  name: "TodoTable",
  props: {
    deleteTodo: Function,
    isEditing: Boolean,
    setEditId: Function,
    todos: Array,
    toggleStatus: Function,
  },
});
