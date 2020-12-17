import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodereaderComponent } from './qrcodereader.component';

describe('QrcodereaderComponent', () => {
  let component: QrcodereaderComponent;
  let fixture: ComponentFixture<QrcodereaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodereaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodereaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
