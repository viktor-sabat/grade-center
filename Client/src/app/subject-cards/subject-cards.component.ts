import { Component, Input, SimpleChanges } from '@angular/core';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'tlr-subject-card',
  standalone: true,
  imports: [TruncatePipe, MatTooltip],
  templateUrl: './subject-cards.component.html',
  styleUrl: './subject-cards.component.css',
})
export class subjectCardsComponent {

  @Input()
  subjectId: number = 0;

  @Input()
  subjectTitle: string = 'Subject Title...';

  tooltipContent(): string {
    const content = `Title: ${this.subjectTitle}`
    return content;
  }

}