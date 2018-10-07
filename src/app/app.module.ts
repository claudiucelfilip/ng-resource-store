import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgResourceStoreModule } from '@claudiucelfilip/ng-resource-store';
import { AppComponent } from './app.component';
import { BehaviorSubject } from 'rxjs';
import { IResourceOptions, Resource } from '@claudiucelfilip/resource-store';
import { DataResource } from './utils';


const resOptions: IResourceOptions = {
  initialState: new DataResource({
    key: 'tracks-columns',
    tracks: [1, 2, 3],
    columns: ['one', 'two', 'three']
  })
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgResourceStoreModule.forStores([
      new Resource<DataResource>('res-1', resOptions),
      new Resource<DataResource>('res-2', resOptions)
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
