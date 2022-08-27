import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/tailwind.css';
import './assets/styles/fonts.css';
import './assets/styles/style.css';

createApp(App).use(router).mount('#app');
