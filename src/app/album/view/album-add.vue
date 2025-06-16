<script lang="ts" setup>
import type {Ref} from 'vue';
import {ref} from 'vue';
import {useRouter} from 'vue-router';

import {AlbumModel} from '@/app/album/model/album.model';
import {useAlbumStore} from '@/app/album/store/album.store';

const router = useRouter();

const add: Ref<AlbumModel.Request.Add> = ref(new AlbumModel.Request.Add());

const store = useAlbumStore();

function onAdd() {
  store
    .setAdd(add.value)
    .then(() => {
      window.alert('ADD COMPLETE');
      router.back();
    })
    .catch((error: unknown) => {
      console.error(error);
    });
}
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
