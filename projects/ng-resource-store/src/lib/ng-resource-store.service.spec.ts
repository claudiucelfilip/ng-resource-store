import { TestBed, inject } from '@angular/core/testing';

import { NgResourceStoreService } from './ng-resource-store.service';

describe('NgResourceStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgResourceStoreService]
    });
  });

  it('should be created', inject([NgResourceStoreService], (service: NgResourceStoreService) => {
    expect(service).toBeTruthy();
  }));
});
