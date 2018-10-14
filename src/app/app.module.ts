import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgResourceStoreModule, INgResourceOptions } from '@claudiucelfilip/ng-resource-store';
import { AppComponent } from './app.component';
import { DataResource } from './utils';
import { MusicSearchConnector } from './music-search.connector';
import { HttpClient, HttpClientModule, HttpHandler, HttpXhrBackend } from '@angular/common/http';

const resOptions: INgResourceOptions = {
  connectorFactory: {
    useClass: MusicSearchConnector,
    providers: [
      { provide: MusicSearchConnector, deps: [HttpClient] },
      { provide: HttpClient, deps: [HttpHandler] },
      { provide: HttpHandler, useValue: new HttpXhrBackend({ build: () => new XMLHttpRequest }) },
    ]
  },
  autoFetch: true,
  initialState: new DataResource({
    key: 'tracks-columns',
    tracks: [1, 2, 3],
    columns: ['one', 'two', 'three'],
    value: 'conflicting value'
  })
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgResourceStoreModule.forStores({
      'res-1': resOptions,
      'res-2': resOptions
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
