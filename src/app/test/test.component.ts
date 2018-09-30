import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() resource;
  @Input() tracks;
  @Input() columns;
  @Input() key;
  constructor() { }

  ngOnInit() {
    console.log('Resource in input', this.resource.value);
    console.log('Tracks in input', this.tracks.value);
    console.log('Columns in input', this.columns.value);
    this.resource.subscribe(value => console.log('res.sub', value));
    this.tracks.subscribe(value => console.log('tracks.sub', value));
    this.columns.subscribe(value => console.log('columns.sub', value));
    this.key.subscribe(value => console.log('key.sub', value));
  }

}
