<script lang="ts" setup>
import {ref, onBeforeMount} from 'vue';

export interface Props {
  /**
   * - Use an avatar for attributing actions or content to specific users.
   * - The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
   **/
  msg: string;

  /**
   * Represents a book.
   */
  count: number;
}

const props = defineProps<Props>();

const refCount = ref(props.count);

onBeforeMount(() => {
  refCount.value++;
});
</script>

<template>
  <h1>{{ msg }}-{{ refCount }}</h1>

  <template v-if="refCount < 10">
    <hello-items :count="refCount" :msg="msg" />
  </template>
</template>
