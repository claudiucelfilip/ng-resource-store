import { NgModule, Injector } from '@angular/core';
import { NgResourceStoreDirective } from './ng-resource-store.directive';
import { ResourceStore, Resource, IResourceOptions, IResourceConnector } from '@claudiucelfilip/resource-store';
import { HttpClientModule } from '@angular/common/http';

export interface IResourceConnectorConstructor {
  new(db: any): IResourceConnector;
}

export interface INgResourceOptions extends IResourceOptions {
  connectorFactory?: IResourceConnectorFactory;
}

export interface IResourceConnectorFactory {
  useClass: IResourceConnectorConstructor;
  providers: any;
}

@NgModule({
  declarations: [NgResourceStoreDirective],
  exports: [NgResourceStoreDirective],
  imports: [HttpClientModule]
})
export class NgResourceStoreModule {
  static forStores (stores: { [key: string]: INgResourceOptions }) {
    const rootStore = new ResourceStore();

    Object.keys(stores).forEach(key => {
      const store = stores[key];
      let connector = store.connector;

      if (store.connectorFactory) {
        const factory = store.connectorFactory;
        const injector = Injector.create({
          providers: factory.providers
        });
        connector = injector.get(factory.useClass);
      }

      const options: IResourceOptions = Object.assign({}, store, {
        connector
      });

      rootStore.add(new Resource<any>(key, options));
    });

    return {
      ngModule: NgResourceStoreModule,
      providers: [
        {
          provide: ResourceStore,
          useFactory: () => rootStore
        }
      ]
    };
  }
}
