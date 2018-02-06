import { TestBed, inject } from '@angular/core/testing';

import { AlbumimageService } from './albumimage.service';

describe('AlbumimageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumimageService]
    });
  });

  it('should be created', inject([AlbumimageService], (service: AlbumimageService) => {
    expect(service).toBeTruthy();
  }));
});
