import { TestBed, inject } from '@angular/core/testing';

import { DockerService } from './docker.service';

describe('DockerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockerService]
    });
  });

  it('should ...', inject([DockerService], (service: DockerService) => {
    expect(service).toBeTruthy();
  }));
});
