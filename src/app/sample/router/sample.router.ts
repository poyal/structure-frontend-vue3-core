export const SampleRouter = [
  {
    path: '/sample',
    component: () => import('@/app/layout/view/default.layout.vue'),
    redirect: '/sample/hello-world',

    children: [
      {
        path: 'hello-world',
        component: () => import('@/app/sample/view/hello-world.vue')
      }
    ]
  }
];
