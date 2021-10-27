import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

import registerGlobalComponents from './plugins/global-components';

import './assets/styles/index.css';

const app = createApp(App);
app.use(router);

registerGlobalComponents(app);

app.mount('#app');
