import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'comments-summery',
  templateUrl: './comments-summery.component.html',
  styleUrls: ['./comments-summery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsSummeryComponent {

  @Input() comments: Array<Comment>;
}
