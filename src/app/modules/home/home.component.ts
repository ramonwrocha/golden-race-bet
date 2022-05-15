import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ModuleModel } from 'src/app/core/models/module.model';
import { ModulesService } from 'src/app/core/services/modules.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modules: ModuleModel[] = [];

  unsubscribeAll = new Subject();

  constructor(private modulesService: ModulesService, private router: Router) {}

  async ngOnInit() {
    this.modules = await this.getModules();
  }

  private getModules() {
    return new Promise<ModuleModel[]>((resolve, reject) => {
      this.modulesService.getModules().pipe(takeUntil(this.unsubscribeAll))
        .subscribe((res: ModuleModel[]) => resolve(res),
          (error: any) => {
            reject(error);
            console.error(error);
          });
    });
  }

  redirectModule(module: ModuleModel) {
    this.router.navigate([ `/${module.routePath}`]);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

}
