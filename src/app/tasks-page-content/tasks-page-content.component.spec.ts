import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPageContentComponent } from './tasks-page-content.component';

describe('TasksPageContentComponent', () => {
  let component: TasksPageContentComponent;
  let fixture: ComponentFixture<TasksPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPageContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
