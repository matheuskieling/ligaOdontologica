import { TestBed } from '@angular/core/testing';

import { ImageService } from './images.service';

describe('ConsultorioImagesService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
