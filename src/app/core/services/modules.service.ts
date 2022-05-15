import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ModuleModel } from '../models/module.model';

@Injectable({
  providedIn: 'root'
})

export class ModulesService {

  constructor(private http: HttpClient) { }

  getModules() {
    return this.http.get<ModuleModel[]>(`${environment.api}/modules`);
  }


}
