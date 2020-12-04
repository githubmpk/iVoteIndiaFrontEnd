import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetcredentialsComponent } from './resetcredentials.component';

describe('ResetcredentialsComponent', () => {
  let component: ResetcredentialsComponent;
  let fixture: ComponentFixture<ResetcredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetcredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetcredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
