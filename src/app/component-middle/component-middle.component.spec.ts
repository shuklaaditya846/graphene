import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMiddleComponent } from './component-middle.component';

describe('ComponentMiddleComponent', () => {
  let component: ComponentMiddleComponent;
  let fixture: ComponentFixture<ComponentMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMiddleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
