// headerのメニューが押されたらからhoge()を読んでフラグを反転
// sidebarからはcollapsedを呼んで参照
import { ref } from 'vue';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export default function useCollapse() {
  const collapsed = ref<boolean>(false);

  const toggle = () => {
    collapsed.value = !collapsed.value;
  };

  return {
    toggle,
    collapsed,
  };
}
