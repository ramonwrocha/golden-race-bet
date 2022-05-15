import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BallModel } from 'src/app/core/models/ball.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  private balls = new BehaviorSubject<BallModel[]>([]);
  selectedBalls = this.balls.asObservable();

  constructor(private http: HttpClient) { }

  getBalls() {
    return this.http.get<BallModel[]>(`${environment.api}/balls`);
  }

  updateSelectedBalls(balls: BallModel[]) {
    this.balls.next(balls);
  }

}
