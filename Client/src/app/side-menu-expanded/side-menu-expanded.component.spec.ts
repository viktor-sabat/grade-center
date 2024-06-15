import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuExpandedComponent } from './side-menu-expanded.component';

describe('SideMenuExpandedComponent', () => {
  let component: SideMenuExpandedComponent;
  let fixture: ComponentFixture<SideMenuExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuExpandedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideMenuExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
