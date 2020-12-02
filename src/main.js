import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseHeading from './components/ui/BaseHeading.vue';
import BaseParagraph from './components/ui/BaseParagraph.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-heading', BaseHeading);
app.component('base-paragraph', BaseParagraph);

app.mount('#app');
