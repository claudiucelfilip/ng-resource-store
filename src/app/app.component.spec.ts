import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgResourceStoreModule } from '@claudiucelfilip/ng-resource-store';
import { IResourceOptions, Resource } from '@claudiucelfilip/resource-store';
import { DataResource } from './utils';

const resOptions: IResourceOptions = {
  initialState: new DataResource({
    key: 'tracks-columns',
    tracks: [1, 2, 3],
    columns: ['one', 'two', 'three']
  })
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgResourceStoreModule.forStores({
          'res-1': resOptions,
          'res-2': resOptions
        })
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ng-resource-store-app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-resource-store-app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-resource-store-app!');
  }));
});
