import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EballotComponent } from './eballot.component';

describe('EballotComponent', () => {
  let component: EballotComponent;
  let fixture: ComponentFixture<EballotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EballotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EballotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
