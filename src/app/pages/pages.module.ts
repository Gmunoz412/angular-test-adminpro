import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { NgChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule({
  declarations: [

    ProgressComponent,
    GraficalComponent,
    PagesComponent,
    DashboardComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
   
  ],

  exports :[
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
    DashboardComponent,
    NgChartsModule,
    AccountSettingsComponent
  ]
})
export class PagesModule { }
