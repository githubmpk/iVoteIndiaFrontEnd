import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintreaderComponent } from './fingerprintreader.component';

describe('FingerprintreaderComponent', () => {
  let component: FingerprintreaderComponent;
  let fixture: ComponentFixture<FingerprintreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FingerprintreaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerprintreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
