import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssignmentsGridComponent } from './assignments-grid/assignments-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AssignmentsGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
