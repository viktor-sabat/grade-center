import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuLogicComponent } from './sidemenu-logic.component';

describe('SidemenuLogicComponent', () => {
  let component: SidemenuLogicComponent;
  let fixture: ComponentFixture<SidemenuLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidemenuLogicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidemenuLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
