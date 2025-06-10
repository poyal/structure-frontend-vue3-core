<script lang="ts" setup>
import type {Ref} from 'vue';
import {ref, watch} from 'vue';
import {storeToRefs} from 'pinia';
import {useRouter} from 'vue-router';

import {ResultEnum} from '@/app/shared/enum/result.enum';
import {AlbumModel} from '@/app/album/model/album.model';
import type {ResultModel} from '@/app/shared/model/result.model';
import {useAlbumStore} from '@/app/album/store/album.store';

const router = useRouter();

const add: Ref<AlbumModel.Request.Add> = ref(new AlbumModel.Request.Add());

const store = useAlbumStore();
const {result} = storeToRefs(store);

function onAdd() {
  store.setAdd(add.value);
}

watch(result, () => {
  const result: ResultModel = store.getResult();
  if (ResultEnum.ADD === result.action) {
    window.alert('ADD COMPLETE');
    router.back();
  }
});
</script>

<template>
  <div>
    <label>title</label>
    <input v-model="add.title" type="text" />
  </div>

  <div>
    <label>userId</label>
    <input v-model="add.userId" type="number" />
  </div>

  <div>
    <button type="button" @click="onAdd">ADD</button>
  </div>
</template>
