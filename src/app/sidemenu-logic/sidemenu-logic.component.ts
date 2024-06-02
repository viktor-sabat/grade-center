import { Component } from '@angular/core';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { SidemenuExpandedComponent } from '../sidemenu-expanded/sidemenu-expanded.component';
import { SideMenuStateService } from '../side-menu-state.service';

@Component({
  selector: 'tlr-sidemenu',
  standalone: true,
  imports: [SidemenuComponent, SidemenuExpandedComponent],
  templateUrl: './sidemenu-logic.component.html',
  styleUrl: './sidemenu-logic.component.css'
})
export class SidemenuLogicComponent {
  isExpanded: boolean = false;

  constructor(private sideMenuStateService: SideMenuStateService) {}

  ngOnInit() {
    this.sideMenuStateService.isExpanded$.subscribe(isExpanded => {
      this.isExpanded = isExpanded;
    });
  }
}
