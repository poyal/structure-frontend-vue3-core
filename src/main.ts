import 'reflect-metadata';

import type {App as CoreApp} from 'vue';
import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from '@/app.vue';
import router from '@/router';

import {SetFilter} from '@/app/shared/filter/shared.filter';
import {SetDirective} from '@/app/shared/directive/shared.directive';

import '@/assets/main.scss';

const app: CoreApp<Element> = createApp(App);

app.use(createPinia());
app.use(router);

SetFilter(app);
SetDirective(app);

app.mount('#app');
