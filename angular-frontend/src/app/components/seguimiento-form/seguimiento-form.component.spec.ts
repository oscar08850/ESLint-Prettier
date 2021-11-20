import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoFormComponent } from './seguimiento-form.component';

describe('SeguimientoFormComponent', () => {
  let component: SeguimientoFormComponent;
  let fixture: ComponentFixture<SeguimientoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
