import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBottomComponent } from './component-bottom.component';

describe('ComponentBottomComponent', () => {
  let component: ComponentBottomComponent;
  let fixture: ComponentFixture<ComponentBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
