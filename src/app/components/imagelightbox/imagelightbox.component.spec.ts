import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagelightboxComponent } from './imagelightbox.component';

describe('ImagelightboxComponent', () => {
  let component: ImagelightboxComponent;
  let fixture: ComponentFixture<ImagelightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagelightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagelightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
