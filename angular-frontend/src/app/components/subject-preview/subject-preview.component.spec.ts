import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPreviewComponent } from './subject-preview.component';

describe('SubjectPreviewComponent', () => {
  let component: SubjectPreviewComponent;
  let fixture: ComponentFixture<SubjectPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
