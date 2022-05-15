import { Component, Input } from '@angular/core';
import { BallModel, EMPTY_BALL } from '../../../../core/models/ball.model';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})

export class BallComponent {
  @Input() ball: BallModel = EMPTY_BALL;
  @Input() width: string = '150px';
  @Input() height: string = '150px';
  @Input() fontSize: string = '50px';
  @Input() fontFamily: string = 'Red Hat Mono';
  @Input() showChecked: boolean = true;
}
