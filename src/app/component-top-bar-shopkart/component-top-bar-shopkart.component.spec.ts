import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTopBarShopkartComponent } from './component-top-bar-shopkart.component';

describe('ComponentTopBarShopkartComponent', () => {
  let component: ComponentTopBarShopkartComponent;
  let fixture: ComponentFixture<ComponentTopBarShopkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTopBarShopkartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTopBarShopkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
