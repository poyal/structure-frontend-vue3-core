<script lang="ts" setup>
import {ref} from 'vue';

import HelloItems from '@/app/sample/components/hello-items.vue';

const viteEnv = ref(import.meta.env.VITE_ENV);
const viteSampleUrl = ref(import.meta.env.VITE_SAMPLE_URL);
const viteSample = ref(import.meta.env.VITE_SAMPLE);
const sampleHtml = ref('<img src=0 onerror="alert(1)"/>');
</script>

<template>
  <h1>hello-world</h1>
  <h1 class="vite-env">{{ viteEnv }}</h1>
  <h1 class="vite-sample">{{ viteSample }}</h1>
  <h1 class="vite-sample-url">{{ $filters.sampleFilter(viteSampleUrl) }}</h1>
  <div v-safe-html="sampleHtml"></div>

  <hello-items :count="0" msg="wow hello world" />
</template>
