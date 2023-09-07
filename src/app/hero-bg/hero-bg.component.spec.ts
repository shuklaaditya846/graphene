import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBgComponent } from './hero-bg.component';

describe('HeroBgComponent', () => {
  let component: HeroBgComponent;
  let fixture: ComponentFixture<HeroBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
