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
const modify: Ref<AlbumModel.Request.Modify> = ref(new AlbumModel.Request.Modify());

const store = useAlbumStore();
const {one, result} = storeToRefs(store);

onMounted(() => {
  onSearch(id);
});

function onSearch(id: number) {
  store.setOne(id);
}

function onModify() {
  store.setModify(id, modify.value);
}

watch(one, () => {
  modify.value = store.getModify();
});

watch(result, () => {
  const result: ResultModel = store.getResult();
  if (ResultEnum.MODIFY === result.action) {
    window.alert('MODIFY COMPLETE');
    router.back();
  }
});
</script>

<template>
  <div>
    <label>title</label>
    <input v-model="modify.title" type="text" />
  </div>

  <div>
    <label>userId</label>
    <input v-model="modify.userId" type="number" />
  </div>

  <div>
    <button type="button" @click="onModify">MODIFY</button>
  </div>
</template>
