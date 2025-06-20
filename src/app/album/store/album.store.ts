import {type AxiosError, type AxiosResponse} from 'axios';
import {defineStore} from 'pinia';

import {getValidate, isValidate, throwValidateError} from '@/core/methods';
import Container from '@/core/container';
import SampleAxios from '@/core/axios/sample.axios';
import Mapper from '@/core/service/mapper.service';

import {AlbumModel} from '@/app/album/model/album.model';

export const useAlbumStore = defineStore('album-store', () => {
  const sample: SampleAxios = Container.resolve(SampleAxios);
  const mapper: Mapper = Container.resolve(Mapper);

  let list: AlbumModel.Response.FindAll[];
  let one: AlbumModel.Response.FindOne;

  function setList(params: AlbumModel.Request.Search): Promise<AlbumModel.Response.FindAll[]> {
    return new Promise<AlbumModel.Response.FindAll[]>((resolve, reject) => {
      console.log(params);
      if (!isValidate(params)) {
        reject(throwValidateError(getValidate(params)));
      }

      sample
        .get('/albums', {params})
        .then((response: AxiosResponse<AlbumModel.Response.FindAll[]>) => {
          list = mapper.toArray(AlbumModel.Response.FindAll, response.data);
          resolve(getList());
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  function getList(): AlbumModel.Response.FindAll[] {
    return mapper.toArray(AlbumModel.Response.FindAll, list);
  }

  function setOne(id: number): Promise<AlbumModel.Response.FindOne> {
    return new Promise<AlbumModel.Response.FindOne>((resolve, reject) => {
      sample
        .get(`/albums/${id}`)
        .then((response: AxiosResponse<AlbumModel.Response.FindOne>) => {
          one = mapper.toObject(AlbumModel.Response.FindOne, response.data);
          resolve(getOne());
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  function getOne(): AlbumModel.Response.FindOne {
    return mapper.toObject(AlbumModel.Response.FindOne, one);
  }

  function getModify(): AlbumModel.Request.Modify {
    return mapper.toObject(AlbumModel.Request.Modify, one);
  }

  function setAdd(params: AlbumModel.Request.Add): Promise<AlbumModel.Response.FindOne> {
    return new Promise<AlbumModel.Response.FindOne>((resolve, reject) => {
      if (!isValidate(params)) {
        reject(throwValidateError(getValidate(params)));
      }

      sample
        .post(`/albums`, params)
        .then((response: AxiosResponse<AlbumModel.Response.FindOne>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  function setModify(id: number, params: AlbumModel.Request.Modify): Promise<AlbumModel.Response.FindOne> {
    return new Promise<AlbumModel.Response.FindOne>((resolve, reject) => {
      if (!isValidate(params)) {
        reject(throwValidateError(getValidate(params)));
      }

      sample
        .put(`/albums/${id}`, params)
        .then((response: AxiosResponse<AlbumModel.Response.FindOne>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  function setDelete(id: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      sample
        .delete(`/albums/${id}`)
        .then(() => {
          resolve(true);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  }

  return {setList, getList, setOne, getOne, getModify, setAdd, setModify, setDelete};
});
