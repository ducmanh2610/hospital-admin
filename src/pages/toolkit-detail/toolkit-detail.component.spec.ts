import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitDetailComponent } from './toolkit-detail.component';

describe('ToolkitDetailComponent', () => {
  let component: ToolkitDetailComponent;
  let fixture: ComponentFixture<ToolkitDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolkitDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolkitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
