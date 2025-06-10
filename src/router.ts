import {createRouter, createWebHistory} from 'vue-router';

import {SystemRouter} from '@/app/system/router/system.router';
import {AlbumRouter} from '@/app/album/router/album.router';
import {SampleRouter} from '@/app/sample/router/sample.router';

export const routes = [...SystemRouter, ...AlbumRouter, ...SampleRouter];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
