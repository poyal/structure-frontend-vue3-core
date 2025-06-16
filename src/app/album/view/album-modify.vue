<script lang="ts" setup>
import type {Ref} from 'vue';
import {ref, onMounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';

import {AlbumModel} from '@/app/album/model/album.model';
import {useAlbumStore} from '@/app/album/store/album.store';

const route = useRoute();
const router = useRouter();

const id: number = Number(route.params.id);
const modify: Ref<AlbumModel.Request.Modify> = ref(new AlbumModel.Request.Modify());

const store = useAlbumStore();

onMounted(() => {
  onSearch(id);
});

function onSearch(id: number) {
  store.setOne(id).then(() => {
    modify.value = store.getModify();
  });
}

function onModify() {
  store
    .setModify(id, modify.value)
    .then(() => {
      window.alert('MODIFY COMPLETE');
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
