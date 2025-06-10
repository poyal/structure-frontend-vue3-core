<script lang="ts" setup>
import type {Ref} from 'vue';
import {ref, onMounted, watch} from 'vue';
import {storeToRefs} from 'pinia';
import {useRoute, useRouter} from 'vue-router';

import {ResultEnum} from '@/app/shared/enum/result.enum';
import {AlbumModel} from '@/app/album/model/album.model';
import type {ResultModel} from '@/app/shared/model/result.model';
import {useAlbumStore} from '@/app/album/store/album.store';

const route = useRoute();
const router = useRouter();

const id: number = Number(route.params.id);
const detail: Ref<AlbumModel.Response.FindOne> = ref(new AlbumModel.Response.FindOne());

const store = useAlbumStore();
const {one, result} = storeToRefs(store);

onMounted(() => {
  store.setOne(id);
});

function onModify() {
  window.location.href = `./../modify/${id}`;
}

function onDelete() {
  store.setDelete(id);
}

watch(one, () => {
  detail.value = store.getOne();
});

watch(result, () => {
  const result: ResultModel = store.getResult();
  if (ResultEnum.DELETE === result.action) {
    window.alert('DELETE COMPLETE');
    router.back();
  }
});
</script>

<template>
  <div>
    {{ detail }}
  </div>

  <div>
    <button type="button" @click="onModify">MODIFY</button>
    <button type="button" @click="onDelete">DELETE</button>
  </div>
</template>
