import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "TodoForm",
  mounted() {
    this.$nextTick(() => this.inputRef?.focus());
  },
  props: {
    handleSubmit: Function,
    iconAlt: String,
    iconSrc: String,
    isEditing: Boolean,
    labelText: String,
    modelValue: { default: () => "", type: String },
  },
  setup(props, { emit }) {
    const inputRef = ref<HTMLInputElement | null>(null);
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });
    return { inputRef, inputValue };
  },
});
