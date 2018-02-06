import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicgalleryComponent } from './musicgallery.component';

describe('MusicgalleryComponent', () => {
  let component: MusicgalleryComponent;
  let fixture: ComponentFixture<MusicgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
