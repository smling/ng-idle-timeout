import { TestBed } from '@angular/core/testing';

import { IdleService } from './idle.service';

describe('IdleService', () => {
  let service: IdleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start watching', () => {
    const spy = spyOn(service, "startWatching");
    service.startWatching(5);
    expect(spy).toHaveBeenCalled();
  });

  it('should reset timer', () => {
    const spy = spyOn(service, "resetTimer");
    service.resetTimer();
    expect(spy).toHaveBeenCalled();
  });

  it('should stop timer', () => {
    const spy = spyOn(service, "stopTimer");
    service.stopTimer();
    expect(spy).toHaveBeenCalled();
  });
});
