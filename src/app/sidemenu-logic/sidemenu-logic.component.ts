import { Component, output } from '@angular/core';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { SidemenuExpendedComponent } from '../sidemenu-expended/sidemenu-expended.component';

@Component({
  selector: 'tlr-sidemenu',
  standalone: true,
  imports: [SidemenuComponent, SidemenuExpendedComponent],
  templateUrl: './sidemenu-logic.component.html',
  styleUrl: './sidemenu-logic.component.css'
})
export class SidemenuLogicComponent {
  isExpended: boolean = true;
}
