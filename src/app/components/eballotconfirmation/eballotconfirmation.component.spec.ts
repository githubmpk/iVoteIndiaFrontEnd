import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EballotconfirmationComponent } from './eballotconfirmation.component';

describe('EballotconfirmationComponent', () => {
  let component: EballotconfirmationComponent;
  let fixture: ComponentFixture<EballotconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EballotconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EballotconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
