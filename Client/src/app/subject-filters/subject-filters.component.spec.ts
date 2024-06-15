import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFiltersComponent } from './subject-filters.component';

describe('SubjectFiltersComponent', () => {
  let component: SubjectFiltersComponent;
  let fixture: ComponentFixture<SubjectFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
