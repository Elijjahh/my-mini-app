import './assets/scss/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import Noir from './theme';

import { VueTelegramPlugin } from 'vue-tg';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Noir,
  },
});
app.use(VueTelegramPlugin);

app.mount('#app');
