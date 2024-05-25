import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuExpandedComponent } from './sidemenu-expanded.component';

describe('SidemenuExpandedComponent', () => {
  let component: SidemenuExpandedComponent;
  let fixture: ComponentFixture<SidemenuExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidemenuExpandedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidemenuExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
