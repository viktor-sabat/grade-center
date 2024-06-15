import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectGridComponent } from './subject-grid.component';

describe('SubjectGridComponent', () => {
  let component: SubjectGridComponent;
  let fixture: ComponentFixture<SubjectGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
