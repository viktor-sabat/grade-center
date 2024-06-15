import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { SideMenuStateService } from '../side-menu-state.service';

@Component({
  selector: 'tlr-side-menu-collapsed',
  standalone: true,
  imports: [RouterLink, MatTooltipModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})

export class SideMenuComponent {
  constructor(private sideMenuStateService: SideMenuStateService) {}

  onCheckboxClick() {
    this.sideMenuStateService.toggleIsExpanded();
  }
}
