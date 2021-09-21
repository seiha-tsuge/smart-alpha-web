import { App } from 'vue';
import ICon from './AIcon.vue';

ICon.install = (Vue: App) => {
  Vue.component('ICon', ICon);
};

export default ICon;
