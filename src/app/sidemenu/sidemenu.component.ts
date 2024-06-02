import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { SideMenuStateService } from '../side-menu-state.service';

@Component({
  selector: 'tlr-sidemenu-collapsed',
  standalone: true,
  imports: [RouterLink, MatTooltipModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})

export class SidemenuComponent {
  constructor(private sideMenuStateService: SideMenuStateService) {}

  onCheckboxClick() {
    this.sideMenuStateService.toggleIsExpanded();
  }
}
