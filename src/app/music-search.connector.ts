import { IResourceConnector } from '@claudiucelfilip/resource-store';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchConnector implements IResourceConnector {
  constructor(private http: HttpClient) {}
  save(resource) {
    return Promise.resolve();
  }

  fetch(resource) {
    this.http.get('https://www.google.com').subscribe(res => console.log(res));

    return Promise.resolve({});
  }
}
