import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTopBarDeliveryComponent } from './component-top-bar-delivery.component';

describe('ComponentTopBarDeliveryComponent', () => {
  let component: ComponentTopBarDeliveryComponent;
  let fixture: ComponentFixture<ComponentTopBarDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTopBarDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTopBarDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
