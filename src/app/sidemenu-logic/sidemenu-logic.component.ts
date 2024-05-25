import { Component } from '@angular/core';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { SidemenuExpandedComponent } from '../sidemenu-expanded/sidemenu-expanded.component';

@Component({
  selector: 'tlr-sidemenu',
  standalone: true,
  imports: [SidemenuComponent, SidemenuExpandedComponent],
  templateUrl: './sidemenu-logic.component.html',
  styleUrl: './sidemenu-logic.component.css'
})
export class SidemenuLogicComponent {
  isExpanded: boolean = true;
}
