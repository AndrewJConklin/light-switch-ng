import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightlightComponent } from './nightlight.component';

describe('NightlightComponent', () => {
  let component: NightlightComponent;
  let fixture: ComponentFixture<NightlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NightlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
