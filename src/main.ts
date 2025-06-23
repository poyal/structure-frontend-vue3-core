import 'reflect-metadata';

import type {App as CoreApp} from 'vue';
import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from '@/App.vue';
import router from '@/router';

import {SetFilter} from '@/app/shared/filter/shared.filter';
import {SetDirective} from '@/app/shared/directive/shared.directive';

import '@/assets/main.scss';
import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';

const app: CoreApp<Element> = createApp(App);

app.use(createPinia());
app.use(router);

SetFilter(app);
SetDirective(app);

dayjs.locale('ko');
dayjs.extend(CustomParseFormat);

app.mount('#app');
