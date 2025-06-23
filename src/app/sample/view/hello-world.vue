<script lang="ts" setup>
import {onMounted, type Ref, ref} from 'vue';

import HelloItems from '@/app/sample/components/hello-items.vue';
import {SampleModel} from '@/app/sample/model/sample.model.ts';
import Container from '@/core/container.ts';
import Mapper from '@/core/service/mapper.service.ts';
import {getValidate, isValidate, throwValidateError} from '@/core/methods';

const viteEnv = ref(import.meta.env.VITE_ENV);
const viteSampleUrl = ref(import.meta.env.VITE_SAMPLE_URL);
const viteSample = ref(import.meta.env.VITE_SAMPLE);
const sampleHtml = ref('<img src=0 onerror="alert(1)"/>');

const mapper: Mapper = Container.resolve(Mapper);

const sample = {
  name: 'name-eaeseEf6KJozY3H7X00IzJih1rQ4N6uX',
  flag: false,
  enumA: 'TYPE_A_1',
  enumB: 'TYPE_B_4',
  date: '20250617',
  dateTime: '2025/05/31 17:55:45',
  time: '23~53~50'
};

onMounted(() => {
  // @ts-ignore
  const sampleClass = mapper.toObject(SampleModel.Request.Add, sample);

  console.info(sampleClass);
  console.info(mapper.toPlain(sampleClass));
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
