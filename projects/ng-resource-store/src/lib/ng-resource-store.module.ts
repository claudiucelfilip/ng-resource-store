import { NgModule } from '@angular/core';
import { NgResourceStoreDirective } from './ng-resource-store.directive';
import { ResourceStore } from '@claudiucelfilip/resource-store';


@NgModule({
  declarations: [NgResourceStoreDirective],
  exports: [NgResourceStoreDirective]
})
export class NgResourceStoreModule {
  static forStores(stores) {
    let rootStore = new ResourceStore();
    stores.forEach(store => rootStore.add(store));

    return {
      ngModule: NgResourceStoreModule,
      providers: [
        { 
          provide: ResourceStore,
          useFactory: () => rootStore
        }
      ]
    }
  }
}
