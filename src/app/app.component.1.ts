import { Component } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BitcoinService } from './bitcoin.service';
import { Chart } from 'chart.js';
import 'chartjs-plugin-zoom';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart =[];
  title = 'app';

  constructor(private _bitcoin:BitcoinService) {}
  loadpriceForDate(date:String){
    // document.getElemenet*().innerHTML='aksfhaf'
  }
  ngOnInit() {
    this._bitcoin.dailyForecast()
      .subscribe(res => {
        let time = res.map(res => res.time)
        let predicted_price = res.map(res => res.predicted_price)
        let true_price = res.map(res => res.true_price)

        let weatherDates = []
        time.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
        })

        this.chart = new Chart('canvas', {
          zoom: {
            // Boolean to enable zooming
            enabled: true,

            // Zooming directions. Remove the appropriate direction to disable 
            // Eg. 'y' would only allow zooming in the y direction
            mode: 'xy',
        },
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: predicted_price,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: true_price,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
      })
    }
}
