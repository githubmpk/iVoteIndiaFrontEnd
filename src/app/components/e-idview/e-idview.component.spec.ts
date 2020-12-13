import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EIdviewComponent } from './e-idview.component';

describe('EIdviewComponent', () => {
  let component: EIdviewComponent;
  let fixture: ComponentFixture<EIdviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EIdviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EIdviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
