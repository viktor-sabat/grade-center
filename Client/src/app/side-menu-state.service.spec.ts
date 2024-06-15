import { TestBed } from '@angular/core/testing';

import { SideMenuStateService } from './side-menu-state.service';

describe('SideMenuStateService', () => {
  let service: SideMenuStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideMenuStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
