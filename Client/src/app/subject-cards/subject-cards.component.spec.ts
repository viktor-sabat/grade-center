import { ComponentFixture, TestBed } from '@angular/core/testing';

import { subjectCardsComponent } from './subject-cards.component';

describe('SubjectCardsComponent', () => {
  let component: subjectCardsComponent;
  let fixture: ComponentFixture<subjectCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [subjectCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(subjectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
