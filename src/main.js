// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './style.css'


const app = createApp(App);
app.use(router); // Use the router in the app
app.mount('#app');






