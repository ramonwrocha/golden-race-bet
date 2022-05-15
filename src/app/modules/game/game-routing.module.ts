import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';
import { GameComponent } from './game.component';
import { GameService } from './services/game.service';

const routes: Routes = [{ path: '', component: GameComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [GameService, HttpClientModule]
})
export class GameRoutingModule { }
