import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BallModel } from 'src/app/core/models/ball.model';
import { BetModel } from 'src/app/core/models/bet.model';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  unsubscribeAll = new Subject();

  balls: BallModel[] = [];

  constructor(private gameService: GameService) { }

  async ngOnInit() {
    this.balls = await this.getBalls();
  }

  private getBalls() {
    return new Promise<BallModel[]>((resolve, reject) => {
      this.gameService.getBalls().pipe(takeUntil(this.unsubscribeAll))
        .subscribe((res: BallModel[]) => resolve(res),
          (error: any) => {
            reject(error);
            console.error(error);
          });
    });
  }

  getResult(bet: BetModel) {    

    const randomBall = this.balls[Math.floor(Math.random() * this.balls.length)];

    const won = bet.numbers.some(number => number === randomBall.number); 

    alert(`Ball sorted ${randomBall.number} - Won: ${won}`);   
    
    this.resetGame();
  }

  resetGame() {
    this.balls.map(item => item.checked = false);
    this.gameService.updateSelectedBalls(this.balls);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

}
