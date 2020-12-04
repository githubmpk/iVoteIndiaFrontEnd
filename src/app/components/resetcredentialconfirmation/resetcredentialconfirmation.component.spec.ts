import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetcredentialconfirmationComponent } from './resetcredentialconfirmation.component';

describe('ResetcredentialconfirmationComponent', () => {
  let component: ResetcredentialconfirmationComponent;
  let fixture: ComponentFixture<ResetcredentialconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetcredentialconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetcredentialconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
