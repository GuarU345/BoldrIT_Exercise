import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifiedworkComponent } from './specifiedwork.component';

describe('SpecifiedworkComponent', () => {
  let component: SpecifiedworkComponent;
  let fixture: ComponentFixture<SpecifiedworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifiedworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecifiedworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
