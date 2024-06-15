import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { SideMenuStateService } from '../side-menu-state.service';

@Component({
  selector: 'tlr-side-menu-expanded',
  standalone: true,
  imports: [RouterLink, MatTooltipModule],
  templateUrl: './side-menu-expanded.component.html',
  styleUrl: './side-menu-expanded.component.css'
})

export class SideMenuExpandedComponent {
  userRole: string | null = localStorage.getItem('userRole');

  constructor(private sideMenuStateService: SideMenuStateService) {}

  onCheckboxClick() {
    this.sideMenuStateService.toggleIsExpanded();
  }
}
