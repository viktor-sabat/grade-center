import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tlr-sidemenu-collapsed',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})

export class SidemenuComponent {
  isExpended: boolean = false;

  onCheckboxClick() {
    this.isExpended = true;
    console.log(this.isExpended);
  }
}
