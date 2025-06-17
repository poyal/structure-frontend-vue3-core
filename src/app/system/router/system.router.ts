import EmptyLayout from '@/app/layout/view/empty.layout.vue';
import NotFound from '@/app/system/view/not-found.vue';

export const SystemRouter = [
  {
    path: '',
    redirect: '/sample/hello-world'
  },
  {
    path: '',
    component: EmptyLayout,
    children: [
      {
        path: 'not-found',
        component: NotFound
      }
    ]
  }
];
