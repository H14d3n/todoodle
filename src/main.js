import './assets/main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

router.afterEach((to) => {
    document.title = to.meta.title || 'todoodle ©';
});

app.use(createPinia());
app.use(router);

app.mount('#app');
