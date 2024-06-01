import { Component, EventEmitter, Output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'tlr-user-header',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})

export class UserHeaderComponent {
  @Output()
  isSuccessfullyLoggedOut = new EventEmitter();

  onLogout(){
    this.isSuccessfullyLoggedOut.emit();
  }
}
