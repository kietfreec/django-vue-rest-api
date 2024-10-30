import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);

// Thiết lập axios trên global properties để truy cập trong các component
app.config.globalProperties.$http = axios;

app.mount('#app');
