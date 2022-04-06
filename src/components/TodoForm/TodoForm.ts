import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "TodoForm",
  props: {
    handleSubmit: Function,
    iconAlt: String,
    iconSrc: String,
    isEditing: Boolean,
    labelText: String,
    modelValue: { default: () => "", type: String },
  },
  setup(props, { emit }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });
    return { inputValue };
  },
});
