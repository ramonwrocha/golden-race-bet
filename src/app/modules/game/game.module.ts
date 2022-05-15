import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { BallComponent } from './components/ball/ball.component';
import { SelectionBallsComponent } from './components/selection-balls/selection-balls.component';
import { BetComponent } from './components/bet/bet.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from 'src/app/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GameComponent,
    BallComponent,
    SelectionBallsComponent,
    BetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    GameRoutingModule,
    MaterialDesignModule

  ]
})
export class GameModule { }
