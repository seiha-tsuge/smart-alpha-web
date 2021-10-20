import AppLink from '../components/navigation/AppLink.vue';
import type { App } from 'vue';

export default function registerGlobalComponents(app: App): void {
  app.component('AppLink', AppLink);
}
