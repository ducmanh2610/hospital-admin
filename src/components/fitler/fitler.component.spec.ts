import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitlerComponent } from './fitler.component';

describe('FitlerComponent', () => {
  let component: FitlerComponent;
  let fixture: ComponentFixture<FitlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
