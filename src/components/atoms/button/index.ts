import { App } from 'vue';
import Button from './AButton.vue';

Button.install = (Vue: App) => {
  Vue.component('Button', Button);
};

export default Button;
