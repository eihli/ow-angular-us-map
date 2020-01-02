import { TestBed } from '@angular/core/testing';

import { OwAngularUsMapService } from './ow-angular-us-map.service';

describe('OwAngularUsMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwAngularUsMapService = TestBed.get(OwAngularUsMapService);
    expect(service).toBeTruthy();
  });
});
