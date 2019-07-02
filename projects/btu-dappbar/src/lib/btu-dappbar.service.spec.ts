import { TestBed } from '@angular/core/testing';

import { BtuDappbarService } from './btu-dappbar.service';

describe('BtuDappbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BtuDappbarService = TestBed.get(BtuDappbarService);
    expect(service).toBeTruthy();
  });
});
