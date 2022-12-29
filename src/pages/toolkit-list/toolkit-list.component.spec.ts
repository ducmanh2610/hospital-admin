import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitListComponent } from './toolkit-list.component';

describe('ToolkitListComponent', () => {
  let component: ToolkitListComponent;
  let fixture: ComponentFixture<ToolkitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolkitListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolkitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
