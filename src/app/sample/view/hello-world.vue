<script lang="ts" setup>
import {onMounted, ref} from 'vue';

import Container from '@/core/container.ts';
import Mapper from '@/core/service/mapper.service.ts';
import {SampleModel} from '@/app/sample/model/sample.model.ts';
import HelloItems from '@/app/sample/components/hello-items.vue';

const viteEnv = ref(import.meta.env.VITE_ENV);
const viteSampleUrl = ref(import.meta.env.VITE_SAMPLE_URL);
const viteSample = ref(import.meta.env.VITE_SAMPLE);
const sampleHtml = ref('<img src=0 onerror="alert(1)"/>');

const mapper: Mapper = Container.resolve(Mapper);

const sample = {
  user_name: 'name-eaeseEf6KJozY3H7X00IzJih1rQ4N6uX',
  user_flag: false,
  user_type: 'TYPE_A_1',
  album_type: 'TYPE_B_4',
  user_date: '20250617',
  album_date_time: '2025/05/31 17:55:45',
  user_time: '23~53~50',
  sample_item: {item_id: 2, item_name: 'sample', item_flag: false},
  sample_items: [
    {item_id: 1, item_name: 'sample', item_flag: false},
    {item_id: 2, item_name: 'sample', item_flag: false}
  ]
};

const sample2 = {
  userName: 'name-eaeseEf6KJozY3H7X00IzJih1rQ4N6uX',
  userFlag: false,
  userType: 'TYPE_A_1',
  albumType: 'TYPE_B_4',
  userDate: '20250617',
  albumDateTime: '2025/05/31 17:55:45',
  userTime: '23~53~50',
  item: {id: 2, name: 'sample', flag: false},
  items: [
    {id: 1, name: 'sample', flag: false},
    {id: 2, name: 'sample', flag: false}
  ]
};

const items = [
  {id: 1, name: 'sample', flag: false},
  {id: 2, name: 'sample', flag: false}
];

onMounted(() => {
  console.info('---------------------------------');

  console.info('sample', sample);

  const toClass: SampleModel.ToClass = mapper.toInstance(SampleModel.ToClass, sample);
  console.info('toClass', toClass);

  const toInstance: SampleModel.ToClass = mapper.toClass(SampleModel.ToClass, toClass);
  console.info('toInstance', toInstance);

  const toPlain: any = mapper.toPlain(toInstance);
  console.info('toPlain', toPlain);

  console.info('---------------------------------');

  console.info('sample2', sample2);

  const toClass2: SampleModel.ToInstance = mapper.toInstance(SampleModel.ToInstance, sample2);
  console.info('toClass2', toClass2);

  const toInstance2: SampleModel.ToClass = mapper.toClass(SampleModel.ToInstance, toClass2);
  console.info('toInstance2', toInstance2);

  const toPlain2: any = mapper.toPlain(toInstance2);
  console.info('toPlain2', toPlain2);

  console.info('---------------------------------');

  console.info('items', items);

  const toClasses: SampleModel.Item2[] = mapper.toInstances(SampleModel.Item2, items);
  console.info('toClasses', toClasses);
});
</script>

<template>
  <h1>hello-world</h1>
  <h1 class="vite-env">{{ viteEnv }}</h1>
  <h1 class="vite-sample">{{ viteSample }}</h1>
  <h1 class="vite-sample-url">{{ $filters.sampleFilter(viteSampleUrl) }}</h1>
  <div v-safe-html="sampleHtml"></div>

  <hello-items :count="0" msg="wow hello world" />
</template>
