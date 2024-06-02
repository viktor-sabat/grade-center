import { Component } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { SideMenuExpandedComponent } from '../side-menu-expanded/side-menu-expanded.component';
import { SideMenuStateService } from '../side-menu-state.service';

@Component({
  selector: 'tlr-side-menu',
  standalone: true,
  imports: [SideMenuComponent, SideMenuExpandedComponent],
  templateUrl: './side-menu-logic.component.html',
  styleUrl: './side-menu-logic.component.css'
})
export class SideMenuLogicComponent {
  isExpanded: boolean = false;

  constructor(private sideMenuStateService: SideMenuStateService) {}

  ngOnInit() {
    this.sideMenuStateService.isExpanded$.subscribe(isExpanded => {
      this.isExpanded = isExpanded;
    });
  }
}
