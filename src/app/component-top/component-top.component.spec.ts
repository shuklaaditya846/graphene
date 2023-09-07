import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTopComponent } from './component-top.component';

describe('ComponentTopComponent', () => {
  let component: ComponentTopComponent;
  let fixture: ComponentFixture<ComponentTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
