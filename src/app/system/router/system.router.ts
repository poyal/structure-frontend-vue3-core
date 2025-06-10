export const SystemRouter = [
  {
    path: '',
    redirect: '/sample/hello-world'
  },
  {
    path: '',
    component: () => import('@/app/layout/view/empty.layout.vue'),
    children: [
      {
        path: 'not-found',
        component: () => import('@/app/system/view/not-found.vue')
      }
    ]
  }
];
