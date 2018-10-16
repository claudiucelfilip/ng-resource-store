import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgResourceStoreModule, INgResourceOptions } from '@claudiucelfilip/ng-resource-store';
import { AppComponent } from './app.component';
import { DataResource } from './utils';
import { MusicSearchConnector } from './music-search.connector';
import { HttpClient, HttpClientModule, HttpHandler, HttpXhrBackend } from '@angular/common/http';
import { LoggerComponent } from './logger.component';

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

const resOptions2 = {...resOptions, ...{
  initialState: new DataResource({
    key: 'tracks-columns-2',
    tracks: [3, 4, 5],
    columns: ['three', 'four', 'five'],
    value: 'conflicting value 2'
  })
}};

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgResourceStoreModule.forStores({
      'res1': resOptions,
      'res-2': resOptions2
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
