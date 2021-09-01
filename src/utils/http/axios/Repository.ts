import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

const repository = axios.create({
  baseURL: '',
});

export const Repository = (resource: string) => {
  return {
    get() {
      return repository.get(`${resource}`);
    },
    post(id: number, payload: any) {
      return repository.post(`${resource}/${id}`, payload);
    },

    put(id: number, payload: any) {
      return repository.post(`${resource}/${id}`, payload);
    },

    patch(id: number, payload: any) {
      return repository.patch(`${resource}/${id}`, payload);
    },

    delete(id: number) {
      return repository.delete(`${resource}/${id}`);
    },
  };
};
