import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AssignmentsGridComponent } from './assignments-grid/assignments-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidemenuComponent, AssignmentsGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
