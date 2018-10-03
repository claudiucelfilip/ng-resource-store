import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgResourceStoreModule } from 'ng-resource-store';
import { AppComponent } from './app.component';

import { IResourceOptions } from 'resource-store';


const resOptions: IResourceOptions = {
  initialState: {
    key: 'tracks-columns',
    tracks: [1, 2, 3],
    columns: ['one', 'two', 'three']
  }
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgResourceStoreModule.forStore({
      'res-1': resOptions,
      'res-2': resOptions
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
