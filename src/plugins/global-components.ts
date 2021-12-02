import type { App } from 'vue';

import AppLink from '../components/navigation/AppLink.vue';
import Button from '../components/general/button/Button.vue';

export default function registerGlobalComponents(app: App): void {
  app.component('AppLink', AppLink);
  app.component('Button', Button);
}
