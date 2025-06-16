<script lang="ts" setup>
import type {Ref} from 'vue';
import {ref, onMounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';

import {AlbumModel} from '@/app/album/model/album.model';
import {useAlbumStore} from '@/app/album/store/album.store';

const route = useRoute();
const router = useRouter();

const id: number = Number(route.params.id);
const detail: Ref<AlbumModel.Response.FindOne> = ref(new AlbumModel.Response.FindOne());

const store = useAlbumStore();

onMounted(() => {
  store.setOne(id).then(() => {
    detail.value = store.getOne();
  });
});

function onModify() {
  window.location.href = `./../modify/${id}`;
}

function onDelete() {
  store
    .setDelete(id)
    .then(() => {
      window.alert('DELETE COMPLETE');
      router.back();
    })
    .catch((error: unknown) => {
      console.error(error);
    });
}
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
