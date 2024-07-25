import './assets/scss/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import Noir from './theme';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Noir,
  },
});

app.mount('#app');
