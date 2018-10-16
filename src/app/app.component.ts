import { Component, OnInit } from '@angular/core';
import { DataResource } from './utils';
import { ResourceStore } from '@claudiucelfilip/resource-store/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-resource-store-app';
  DataResource = DataResource;
  resStore3;
  constructor(private resourceStore: ResourceStore) {
    this.resStore3 = resourceStore.create('res-3', {
      initialState: {
        tracks: [1, 1, 1]
      }
    });

  }

  ngOnInit() {
    // tslint:disable-next-line:no-debugger

  }
}
