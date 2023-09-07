import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTopContentComponent } from './component-top-content.component';

describe('ComponentTopContentComponent', () => {
  let component: ComponentTopContentComponent;
  let fixture: ComponentFixture<ComponentTopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTopContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
