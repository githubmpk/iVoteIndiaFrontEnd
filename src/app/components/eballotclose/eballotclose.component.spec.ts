import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EballotcloseComponent } from './eballotclose.component';

describe('EballotcloseComponent', () => {
  let component: EballotcloseComponent;
  let fixture: ComponentFixture<EballotcloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EballotcloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EballotcloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
