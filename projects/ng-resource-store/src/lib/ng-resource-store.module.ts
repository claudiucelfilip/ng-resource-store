import { NgModule } from '@angular/core';
import { NgResourceStoreDirective } from './ng-resource-store.directive';
import { IResourceOptions, ResourceStore } from 'resource-store';
import * as SoreProps from 'resource-store';

@NgModule({
  declarations: [NgResourceStoreDirective],
  exports: [NgResourceStoreDirective]
})
export class NgResourceStoreModule {
  static forStore(options) {
    let store = new ResourceStore(options);
    return {
      ngModule: NgResourceStoreModule,
      providers: [
        { 
          provide: ResourceStore,
          useFactory: () => store
        }
      ]
    }
  }
}
