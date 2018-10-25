import { TestBed, async } from '@angular/core/testing';
import { NgResourceStoreDirective } from './ng-resource-store.directive';

import { ResourceStore, IResourceOptions, symbol, IResource } from '@claudiucelfilip/resource-store';
import { DataResource } from '../utils';
import { Component, Input, Directive, ViewChild, Output } from '@angular/core';
import { By } from '@angular/platform-browser';

const initialState = {
  tracks: [1, 2, 3],
  columns: ['one', 'two', 'three'],
  value: 'conflicting value',
  foo: {
    label: 'foo',
    value: 'foo conflicting value',
    bar: {
      label: 'bar'
    }
  }
};
const resOptions: IResourceOptions = {
  initialState
};

const resourceStore = new ResourceStore();
resourceStore.create('res-1', resOptions);
resourceStore.create('res-2', resOptions);


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'test-component',
  template: `
    <div *rsResource="let tracksInst1=tracks, let valueInst1=value, let columnsInst1=columns, let resourceInst1 from resourceStore1">
      <span #output1>{{tracksInst1 | async | json}}</span>
      <span #output2>{{valueInst1 | async}}</span>
    </div>
    <div *rsResource="let tracksInst2=tracks, let columnsInst2=columns, let resourceInst2 from resourceStore2">
      <span #output3>{{tracksInst2 | async | json}}</span>
    </div>
    <div *rsResource="let tracksKey1=tracks, let columnsKey1=columns, let resourceKey1 from 'res-1'">
      <span #output4>{{tracksKey1 | async | json}}</span>
    </div>
    <div *rsResource="let tracksKey2=tracks, let columnsKey2=columns, let resourceKey2 from 'res-2'">
      <span #output5>{{tracksKey2 | async | json}}</span>
    </div>
    <div id="multipleStores" *rsResource="let stores, let res1=res1 let res2=res2 from {res1: 'res-1', res2: resourceStore2}">
      <span #output6>{{res1.value | json}}</span>
      <span #output7>{{stores.res2.value | json}}</span>
      <span #output8>{{res2.value | json}}</span>
    </div>
  `
})
class TestComponent {
  @Input() tracks;
  @Input() columns;
  @Input() resource;
  resourceStore1: IResource;
  resourceStore2: IResource;

  @ViewChild('output1') output1Ref;
  @ViewChild('output2') output2Ref;
  @ViewChild('output3') output3Ref;
  @ViewChild('output4') output4Ref;
  @ViewChild('output5') output5Ref;
  @ViewChild('output6') output6Ref;
  @ViewChild('output7') output7Ref;
  @ViewChild('output8') output8Ref;

  constructor(store: ResourceStore) {
    this.resourceStore1 = store.get('res-1');
    this.resourceStore2 = store.get('res-2');
  }
}


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[test]'
})
class TestDirective {}


describe('Ng Resource Store', () => {
  let fixture, des;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        NgResourceStoreDirective,
        TestDirective,
        TestComponent
      ],
      providers: [
        {
          provide: ResourceStore,
          useValue: resourceStore
        }
      ]
    })
      .createComponent(TestComponent);

    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.css('div'));

  });

  it('should load tracks, columns and the whole resource from the resource store instance', () => {
    const [dirInst1, dirInst2] = des;

    const store = TestBed.get(ResourceStore);
    const res1 = store.get(fixture.componentInstance.resourceStore1);
    const res2 = store.get(fixture.componentInstance.resourceStore2);


    expect(dirInst1.context[symbol.id]).toEqual(res1[symbol.id]);
    expect(dirInst2.context[symbol.id]).toEqual(res2[symbol.id]);

    expect(JSON.parse(dirInst1.componentInstance.output1Ref.nativeElement.innerText)).toEqual(res1.tracks.value);
    expect(JSON.parse(dirInst2.componentInstance.output3Ref.nativeElement.innerText)).toEqual(res2.tracks.value);

    expect(dirInst1.context.columns.value).toEqual(res1.columns.value);
    expect(dirInst2.context.columns.value).toEqual(res2.columns.value);
  });

  it('should be able to load multiple stores', () => {
    const [dir] = fixture.debugElement.queryAll(By.css('#multipleStores'));

    expect(JSON.parse(dir.componentInstance.output6Ref.nativeElement.innerText)).toEqual(initialState);
    expect(JSON.parse(dir.componentInstance.output7Ref.nativeElement.innerText)).toEqual(initialState);
    expect(JSON.parse(dir.componentInstance.output8Ref.nativeElement.innerText)).toEqual(initialState);
  });
  it('should be able to load tracks, columns and the whole resource from the resource store key', () => {
    const [_, __, dirKey1, dirKey2] = des;
    const store = TestBed.get(ResourceStore);
    const res1 = store.get(fixture.componentInstance.resourceStore1);
    const res2 = store.get(fixture.componentInstance.resourceStore2);

    expect(dirKey1.context[symbol.id]).toEqual(res1[symbol.id]);
    expect(dirKey2.context[symbol.id]).toEqual(res2[symbol.id]);

    expect(JSON.parse(dirKey1.componentInstance.output1Ref.nativeElement.innerText)).toEqual(res1.tracks.value);
    expect(JSON.parse(dirKey2.componentInstance.output3Ref.nativeElement.innerText)).toEqual(res2.tracks.value);

    expect(dirKey1.context.columns.value).toEqual(res1.columns.value);
    expect(dirKey2.context.columns.value).toEqual(res2.columns.value);
  });

  it('should keep resources in sync accross all stores', () => {
    const [dirInst1, dirInst2, dirKey1, dirKey2] = des;

    const store = TestBed.get(ResourceStore);
    const res1 = store.get(fixture.componentInstance.resourceStore1);
    const res2 = store.get(fixture.componentInstance.resourceStore2);
    const newTracks1 = [5, 6, 7];
    const newTracks2 = [6, 7, 8];
    const newTracks3 = [9, 10, 11];
    const newColumns = ['nine', 'ten', 'eleven'];

    dirInst1.context.tracks.next(newTracks1);
    res2.tracks.next(newTracks2);

    expect(dirInst2.context.tracks.value).toEqual(newTracks2);
    expect(dirKey1.context.tracks.value).toEqual(newTracks1);
    expect(dirKey2.context.tracks.value).toEqual(newTracks2);

    res1.next({
      tracks: newTracks3,
      columns: newColumns
    });

    expect(dirInst1.context.tracks.value).toEqual(newTracks3);
    expect(dirKey1.context.tracks.value).toEqual(newTracks3);
    expect(dirInst1.context.columns.value).toEqual(newColumns);
    expect(dirKey1.context.columns.value).toEqual(newColumns);
  });

  it('should handle conflicting property values (eg. value vs BehaviourSubject.prototype.value)', () => {
    const [dirKey1] = des;

    expect(dirKey1.componentInstance.output2Ref.nativeElement.innerText).toEqual(initialState.value);
  });
});
