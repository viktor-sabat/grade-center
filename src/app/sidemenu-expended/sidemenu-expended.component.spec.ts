import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuExpendedComponent } from './sidemenu-expended.component';

describe('SidemenuExpendedComponent', () => {
  let component: SidemenuExpendedComponent;
  let fixture: ComponentFixture<SidemenuExpendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidemenuExpendedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidemenuExpendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
