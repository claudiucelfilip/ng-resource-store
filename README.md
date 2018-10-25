# ng-resource-store

Provides a way to integrate [resource-store](https://github.com/claudiucelfilip/resource-store) within your Angular project via a service or directive.


## Installation

Install ng-resource-store and resource-store from npm:

`npm install @claudiucelfilip/ng-resource-store @claudiucelfilip/resource-store`

## Basic Usage
```ts
//app.module.ts

import { NgResourceStoreModule, INgResourceOptions } from '@claudiucelfilip/ng-resource-store';
...

const options: INgResourceOptions = {
  initialState: {
    items: [],
    text: 'string text',
    value: 4,
    obj1: {
      obj2: {
        label: 'string label',
        value: 'string label2'
      }
    }
  }
};

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgResourceStoreModule.forStores({
      'res-1': options,
      'res-2': options
    })
  ],
  ...
})
export class AppModule {}
```

```ts
//app.component.ts
import { ResourceStore } from '@claudiucelfilip/resource-store';
...

@Component({
  ...
  template: `
    <!-- acces a single resource -->
    <div *rsResource="let title=text, let items=items, let resourceOne from 'res-1'">
      <h1>{{title.value}}</h2>
      <h2>{{resourceOne.obj1.obj2.label | async}}</h2>
      <app-list [items]="resourceOne.items | async"></app-list>
    </div>

    <!-- acces multiple resources -->
    <div *rsResource="let resourceOne=res1, let resourceTwo=res2 from {res1: 'res-1', res2: scopeRes2}">
      <h1>{{resourceOne.title.value}}</h2>
      <h2>{{resourceTwo.obj1.obj2.label | async}}</h2>
    </div>
  `
})
export class AppComponent{
  scopeRes2;
  constructor(private resourceStore: ResourceStore) {
    this.scopeRes2 = resourceStore.get('res-2');
  }
}

```
## Sync with external storage
```ts
//app.module.ts
...
class SimpleConnector implements IResourceConnector {
  save (context?: ResourceStore | any): Promise<any> {
    return // Promise to sync with external store
  }
  fetch (context?: ResourceStore | any): Promise<any> {
    return // Promise to fetch from external store
  }
}

class HttpConnector implements IResourceConnector {
  constructor(private http: HttpClient) {}
  ...
}

const options1: IResourceOptions = {
  connector: new SimpleConnector,
  autoFetch: false,
  autoSave: true
};

// providers need to be set up in order to inject HttpClient service
const options2: IResourceOptions = {
  connectorFactory: {
    useClass: HttpConnector,
    providers: [
      { provide: MusicSearchConnector, deps: [HttpClient] },
      { provide: HttpClient, deps: [HttpHandler] },
      { provide: HttpHandler, useValue: new HttpXhrBackend({ build: () => new XMLHttpRequest }) },
    ]
  },
  autoFetch: false,
  autoSave: true
};

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgResourceStoreModule.forStores({
      'simple-resource': options1,
      'provider-resource': options2
    })
  ],
  ...
})
export class AppModule {}


```
The store creates enhanced RxJS `BehaviorSubject` proxies which can:
* accessing any property on the resource creates new observables (eg. `resourceOne.text instanceof BehaviorSubject`). These are created and cached, on-demand on any level.
* `resourceOne.obj1.obj2.next(newState)` replaces value with a new one and bubbles up the object tree
* `resourceOne.text.update({
  text: 'string text2'
})` will only replace the `text` property
* all other `BehaviorSubject` functionality applies
* `fetch` and `save` will sync resource with an external store via a `ResourceConnector`

## Configuration Options
The 'ResourceOptions' can have the following properties
* `connector` - attaches ` ResourceConnector` instance to be used to persist state (eg. DB, LocalStorage, etc.)
* `autoFetch` - (boolean, default: false) automatically calls the `fetch` method on Connector
* `autoSave` - (boolean, default: false) any call to `next` or `update` will atomatically call the `save` method on the `ResourceConnector`
* `initialState` - sets the initial state for the resource
