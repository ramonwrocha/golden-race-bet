import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { BallModel } from 'src/app/core/models/ball.model';
import { BetModel } from 'src/app/core/models/bet.model';
import { GameService } from './../../services/game.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})

export class BetComponent implements OnInit {

  selectedBalls: BallModel[] = [];

  unsubscribeAll = new Subject();

  form = this.fb.group({
    value:  [5, [Validators.required, Validators.min(5)]]
  });

  private bet!: BetModel;
  
  @Output() betEvent = new EventEmitter<BetModel>();

  constructor(private gameService: GameService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.gameService.selectedBalls
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(item => this.selectedBalls = item.filter(item => item.checked));
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  onClickBall(ball: BallModel) {
    const index = this.selectedBalls.findIndex(item => item.number == ball.number);     
    this.selectedBalls[index].checked = !ball.checked;
    this.gameService.updateSelectedBalls(this.selectedBalls.filter(item => item.checked));
  }

  placeBet() {

    if (!this.form.valid) { 
      return alert('Bet invalid!');
    }

    this.bet = {
      amount: this.form.controls['value'].value,
      numbers: this.selectedBalls.map(item => item.number)
    };

    this.betEvent.emit(this.bet);
    
  }

}
