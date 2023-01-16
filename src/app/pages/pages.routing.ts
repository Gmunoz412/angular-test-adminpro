import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';


const routes: Routes = [
    {
        path:'dashboard',
      component: PagesComponent ,
      children:[
         { path: '', component:DashboardComponent },
         { path: 'progres', component:ProgressComponent },
         { path: 'grafica1', component:GraficalComponent },
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}