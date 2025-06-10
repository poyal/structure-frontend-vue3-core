import 'reflect-metadata';
import {describe, test, expect, vi, beforeEach} from 'vitest';
import {setActivePinia, createPinia} from 'pinia';

import {AlbumModel} from '@/app/album/model/album.model';
import {useAlbumStore} from '@/app/album/store/album.store';

describe('album/album-list.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('pinia test', async () => {
    const search: AlbumModel.Request.Search = new AlbumModel.Request.Search();
    const sampleStore = useAlbumStore();
    const setSpy = vi.spyOn(sampleStore, 'setList');
    const getSpy = vi.spyOn(sampleStore, 'getList');

    await sampleStore.setList(search);
    const lists = sampleStore.getList();

    expect(setSpy).toHaveBeenCalled();
    expect(getSpy).toHaveBeenCalled();
    expect.arrayContaining(lists);
  });
});
