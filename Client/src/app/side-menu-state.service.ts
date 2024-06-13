import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideMenuStateService {
  private isExpandedSubject = new BehaviorSubject<boolean>(false);
  // The $ sign indicates that the variable holds an Observable
  isExpanded$ = this.isExpandedSubject.asObservable();

  toggleIsExpanded() {
    this.isExpandedSubject.next(!this.isExpandedSubject.value);
  }
  constructor() { }
}
