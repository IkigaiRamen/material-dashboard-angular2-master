import { TestBed } from '@angular/core/testing';

import { DetailEquipeServiceService } from './detail-equipe-service.service';

describe('DetailEquipeServiceService', () => {
  let service: DetailEquipeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailEquipeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
