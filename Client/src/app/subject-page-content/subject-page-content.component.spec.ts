import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPageContentComponent } from './subject-page-content.component';

describe('SubjectPageContentComponent', () => {
  let component: SubjectPageContentComponent;
  let fixture: ComponentFixture<SubjectPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectPageContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
