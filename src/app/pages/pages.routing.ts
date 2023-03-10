import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
    {
        path:'dashboard',
      component: PagesComponent ,
      children:[
         { path: '', component:DashboardComponent,data:{titulo:'Dashboard'} },
         { path: 'progress', component:ProgressComponent,data:{titulo:'Progress Bars'} },
         { path: 'grafica1', component:GraficalComponent,data:{titulo:'Graficas'} },
         { path: 'account-settings', component:AccountSettingsComponent,data:{titulo:'Account Settings'} },
         { path: 'promesas', component:PromesasComponent,data:{titulo:'Promesas'} },
         { path: 'rxjs', component:RxjsComponent,data:{titulo:'Rxjs'} },
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
