import { inject, InjectionKey, provide, reactive, readonly } from 'vue';

type Store = {
  state: {
    readonly collapsed: boolean;
  };
  toggle: () => void;
};

const state = reactive({
  collapsed: false,
});

const toggle = (): void => {
  state.collapsed = !state.collapsed;
};

const store = {
  state: readonly(state),
  toggle,
};

const injectionKey: InjectionKey<Store> = Symbol('collapse-key');

export function provideCollapse(): void {
  provide(injectionKey, store);
}

export function useCollapse(): Store {
  const store = inject(injectionKey);

  if (!store) {
    throw new Error('provideCollapse must be called before useCollapse');
  }

  return store;
}
