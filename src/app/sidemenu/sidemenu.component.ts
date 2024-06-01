import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tlr-sidemenu-collapsed',
  standalone: true,
  imports: [RouterLink, MatTooltipModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})

export class SidemenuComponent {
  isExpanded: boolean = false;

  onCheckboxClick() {
    this.isExpanded = true;
    console.log(this.isExpanded);
  }
}
