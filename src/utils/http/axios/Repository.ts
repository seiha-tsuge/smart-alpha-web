/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';

const repository = axios.create({
  baseURL: '',
});

export const Repository = (resource: string) => {
  return {
    get() {
      return repository.get(`${resource}`);
    },

    post(payload: any) {
      return repository.post(`${resource}`, payload);
    },

    put(id: number, payload: any) {
      return repository.put(`${resource}/${id}`, payload);
    },

    patch(id: number, payload: any) {
      return repository.patch(`${resource}/${id}`, payload);
    },

    delete(id: number) {
      return repository.delete(`${resource}/${id}`);
    },
  };
};