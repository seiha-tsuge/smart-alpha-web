import { ref } from 'vue';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export default function useCollapse(collapsed: ref) {
  const toggle = () => {
    collapsed.value = !collapsed.value;
  };

  return {
    toggle,
  };
}
