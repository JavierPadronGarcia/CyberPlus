import { TestBed } from '@angular/core/testing';

import { NotifiactionsService } from './notifications.service';

describe('NotificationsService', () => {
  let service: NotifiactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifiactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
