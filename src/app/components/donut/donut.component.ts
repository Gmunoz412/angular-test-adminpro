import { Component, Input } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {
   @Input() title: string = "Sin TItulos";
   //@Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
   public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
   //@Input('data') doughnutChartData: ChartData<'doughnut'> = {
    public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] ,
      backgroundColor:["#9E120","#FF5800","#FFB414"]}
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
}
