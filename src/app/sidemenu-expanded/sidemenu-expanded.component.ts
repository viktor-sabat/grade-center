import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tlr-sidemenu-expanded',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidemenu-expanded.component.html',
  styleUrl: './sidemenu-expanded.component.css'
})

export class SidemenuExpandedComponent {
  isExpanded: boolean = true;

  onCheckboxClick() {
    this.isExpanded = false;
    console.log(this.isExpanded);
  }
}
