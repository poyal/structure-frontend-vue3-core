import type {Ref} from 'vue';
import {ref} from 'vue';
import type {AxiosResponse} from 'axios';
import {defineStore} from 'pinia';

import {Validate} from '@/core/methods';
import Container from '@/core/container';
import SampleAxios from '@/core/axios/sample.axios';
import Mapper from '@/core/service/mapper.service';

import {ResultEnum} from '@/app/shared/enum/result.enum';
import {ResultModel} from '@/app/shared/model/result.model';
import {AlbumModel} from '@/app/album/model/album.model';

export const useAlbumStore = defineStore('album-store', () => {
  const sample: SampleAxios = Container.resolve(SampleAxios);
  const mapper: Mapper = Container.resolve(Mapper);

  const list: Ref<AlbumModel.Response.FindAll[]> = ref([]);
  const one: Ref<AlbumModel.Response.FindOne> = ref(new AlbumModel.Response.FindOne());
  const result: Ref<ResultModel> = ref(new ResultModel());

  function setList(params: AlbumModel.Request.Search) {
    if (Validate(params)) {
      return sample.get('/albums', {params}).then((response: AxiosResponse<AlbumModel.Response.FindAll[]>) => {
        list.value = mapper.toArray(AlbumModel.Response.FindAll, response.data);
      });
    }

    return;
  }

  function getList(): AlbumModel.Response.FindAll[] {
    return mapper.toArray(AlbumModel.Response.FindAll, list.value);
  }

  function setOne(id: number) {
    return sample.get(`/albums/${id}`).then((response: AxiosResponse<AlbumModel.Response.FindOne>) => {
      one.value = mapper.toObject(AlbumModel.Response.FindOne, response.data);
    });
  }

  function getOne(): AlbumModel.Response.FindOne {
    return mapper.toObject(AlbumModel.Response.FindOne, one.value);
  }

  function getModify(): AlbumModel.Request.Modify {
    return mapper.toObject(AlbumModel.Request.Modify, one.value);
  }

  function setAdd(add: AlbumModel.Request.Add) {
    if (Validate(add)) {
      return sample.post(`/albums`, add).then((response: AxiosResponse<AlbumModel.Response.FindOne>) => {
        result.value = {
          action: ResultEnum.ADD,
          data: mapper.toObject(AlbumModel.Response.FindOne, response.data)
        };
      });
    }

    return;
  }

  function setModify(id: number, modify: AlbumModel.Request.Modify) {
    if (Validate(modify)) {
      return sample.put(`/albums/${id}`, modify).then((response: AxiosResponse<AlbumModel.Response.FindOne>) => {
        result.value = {
          action: ResultEnum.MODIFY,
          data: mapper.toObject(AlbumModel.Response.FindOne, response.data)
        };
      });
    }

    return;
  }

  function setDelete(id: number) {
    return sample.delete(`/albums/${id}`).then(() => {
      result.value = {
        action: ResultEnum.DELETE,
        data: null
      };
    });
  }

  function getResult(): ResultModel {
    return mapper.toObject(ResultModel, result.value);
  }

  return {list, one, result, setList, getList, setOne, getOne, getModify, setAdd, setModify, setDelete, getResult};
});
