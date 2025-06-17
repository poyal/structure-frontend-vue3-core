import DefaultLayout from '@/app/layout/view/default.layout.vue';
import HelloWorld from '@/app/sample/view/hello-world.vue';

export const SampleRouter = [
  {
    path: '/sample',
    component: DefaultLayout,
    redirect: '/sample/hello-world',

    children: [
      {
        path: 'hello-world',
        component: HelloWorld
      }
    ]
  }
];
