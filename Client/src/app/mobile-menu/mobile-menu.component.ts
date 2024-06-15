import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tlr-mobile-menu',
  standalone: true,
  imports: [MatTooltipModule, RouterLink],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css'
})
export class MobileMenuComponent {
  userRole: string | null = localStorage.getItem('userRole');

}
