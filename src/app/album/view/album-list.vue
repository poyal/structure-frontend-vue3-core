<script lang="ts" setup>
import type {Ref} from 'vue';
import {ref, onMounted, watch} from 'vue';
import {storeToRefs} from 'pinia';

import {AlbumModel} from '@/app/album/model/album.model';
import {useAlbumStore} from '@/app/album/store/album.store';

const search: Ref<AlbumModel.Request.Search> = ref(new AlbumModel.Request.Search());
const lists: Ref<AlbumModel.Response.FindAll[]> = ref([]);

const store = useAlbumStore();

onMounted(() => {
  onSearch();
});

function onSearch() {
  store
    .setList(search.value)
    .then(() => {
      lists.value = store.getList();
    })
    .catch((error: unknown) => {
      console.error(error);
      console.log(Object.assign({}, error));
    });
}

function onClick(item: AlbumModel.Response.FindAll) {
  window.location.href = `./detail/${item.id}`;
}

function onAdd() {
  window.location.href = `./add`;
}
</script>

<template>
  <div>
    <input v-model="search.title" type="search" />
    <button type="button" @click="onSearch">SHOOT</button>
  </div>

  <div>
    <button type="button" @click="onAdd">ADD</button>
  </div>

  <template v-for="item in lists" :key="item.id">
    <div class="items" @click="onClick(item)">{{ item }}</div>
  </template>
</template>
