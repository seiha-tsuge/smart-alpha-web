/* eslint-disable */

import Icon from './components/AIcon.vue';
import Button from './components/AButton.vue';

import { App } from 'vue';

function install(Vue: App) {
  Vue.component('Icon', Icon);
  Vue.component('Button', Button);
}

export default { install };

export { default as Icon } from './components/AIcon.vue';
export { default as Button } from './components/AButton.vue';
