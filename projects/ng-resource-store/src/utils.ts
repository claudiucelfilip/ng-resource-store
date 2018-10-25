import { IResource } from '@claudiucelfilip/resource-store';
export class DataResource {
  key: any;
  id: IResource;
  tracks: IResource;
  columns: IResource;

  constructor(options) {
    Object.assign(this, options);
  }
}
