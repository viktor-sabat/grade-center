import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { SideMenuStateService } from '../side-menu-state.service';

@Component({
  selector: 'tlr-sidemenu-expanded',
  standalone: true,
  imports: [RouterLink, MatTooltipModule],
  templateUrl: './sidemenu-expanded.component.html',
  styleUrl: './sidemenu-expanded.component.css'
})

export class SidemenuExpandedComponent {
  constructor(private sideMenuStateService: SideMenuStateService) {}

  onCheckboxClick() {
    this.sideMenuStateService.toggleIsExpanded();
  }
}
