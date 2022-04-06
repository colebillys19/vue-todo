import { computed, defineComponent } from "vue";
import TodoForm from "@/components/TodoForm/TodoForm.vue";

export default defineComponent({
  name: "EditDialog",
  components: { TodoForm },
  // methods: {
  //   listenForEsc(e) {
  //     if (e.which === 27) {
  //       this.setEditId();
  //     }
  //   }
  // },
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
});
