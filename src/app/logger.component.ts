import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logger',
  template: ''
})
export class LoggerComponent implements OnInit {
  @Input() target;
  @Output() out = 'text';

  ngOnInit() {
    console.log(this.target);

  }
}
