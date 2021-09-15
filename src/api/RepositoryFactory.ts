/* eslint-disable @typescript-eslint/no-explicit-any */

interface repositoryObjest {
  [name: string]: any;
}

const repositories: repositoryObjest = {};

export const RepositoryFactory = {
  get: (name: string): any => repositories[name],
};
