import { Component } from '@angular/core';
import { DataResource } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-resource-store-app';
  DataResource = DataResource;
}
