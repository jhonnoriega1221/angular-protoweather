import { TestBed } from '@angular/core/testing';

import { AppThemeService } from './app-theme.service';

describe('AppThemeService', () => {
  let service: AppThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
