import { Resource, ResourceSubject } from '@claudiucelfilip/resource-store';

export interface IDataResource extends Resource<any> {
  key: ResourceSubject<string>;
  id: ResourceSubject<string>;
  tracks: ResourceSubject<number[]>;
  columns: ResourceSubject<string[]>;
};


export class DataResource {
  key: ResourceSubject<string>;
  id: ResourceSubject<string>;
  tracks: ResourceSubject<number[]>;
  columns: ResourceSubject<string[]>;

  constructor(options) {
    Object.assign(this, options);
  }
}