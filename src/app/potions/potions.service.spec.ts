import { TestBed, inject } from '@angular/core/testing';

import { PotionsService } from './potions.service';

describe('PotionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PotionsService]
    });
  });

  it('should be created', inject([PotionsService], (service: PotionsService) => {
    expect(service).toBeTruthy();
  }));
});
