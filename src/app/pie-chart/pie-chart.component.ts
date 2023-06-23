import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts= Highcharts;
  chartOptions= { }


  constructor(){
    this.chartOptions={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Average Students Admision',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    credits:{
      enabled:false
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Courses',
        colorByPoint: true,
        data: [{
            name: 'MEARN STACK',
            y: 50.67,
            sliced: true,
            selected: true
        }, {
            name: 'PYTHON',
            y: 34.77
        },  {
            name: 'BIG DATA',
            y: 12.86
        }, {
            name: '.NET ',
            y: 2.63
        }, {
            name: 'JAVA',
            y: 1.53
        },  {
            name: 'PHP',
            y: 1.40
        }, ]
    }]
    }
  }
   
}
