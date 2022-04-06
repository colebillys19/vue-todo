import { computed, defineComponent } from "vue";
import TodoForm from "@/components/TodoForm/TodoForm.vue";

export default defineComponent({
  name: "EditDialog",
  components: { TodoForm },
  methods: {
    handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (this.setEditId) {
          this.setEditId("");
        }
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleEsc);
  },
  props: {
    editId: String,
    modelValue: String,
    setEditId: Function,
    updateTask: Function,
  },
  setup(props, { emit }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });
    return { inputValue };
  },
  unmounted() {
    window.removeEventListener("keydown", this.handleEsc);
  },
});
