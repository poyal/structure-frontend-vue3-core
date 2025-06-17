import DefaultLayout from '@/app/layout/view/default.layout.vue';

export const AlbumRouter = [
  {
    path: '/album',
    component: DefaultLayout,
    redirect: '/album/list',

    children: [
      {
        path: 'list',
        component: () => import('@/app/album/view/album-list.vue')
      },
      {
        path: 'detail/:id',
        component: () => import('@/app/album/view/album-detail.vue')
      },
      {
        path: 'add',
        component: () => import('@/app/album/view/album-add.vue')
      },
      {
        path: 'modify/:id',
        component: () => import('@/app/album/view/album-modify.vue')
      }
    ]
  }
];
