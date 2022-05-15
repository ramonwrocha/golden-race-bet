import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BallModel } from 'src/app/core/models/ball.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-selection-balls',
  templateUrl: './selection-balls.component.html',
  styleUrls: ['./selection-balls.component.scss']
})

export class SelectionBallsComponent {

  @Input() balls: BallModel[] = [];

  constructor(private gameService: GameService) { }
  
  onClickBall(ball: BallModel) {
    const index = this.balls.findIndex(item => item.number == ball.number);     
    this.balls[index].checked = !ball.checked;
    this.gameService.updateSelectedBalls(this.balls.filter(item => item.checked));
  }

  clearSelection() {
    this.balls.map(item => item.checked = false);
    this.gameService.updateSelectedBalls(this.balls);
  }

}
