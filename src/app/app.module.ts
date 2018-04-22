import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FusionChartsModule } from 'angular2-fusioncharts';
import { AppComponent } from './app.component';
import { BitcoinService } from './bitcoin.service';
import { HttpClientModule } from '@angular/common/http';

// import * as FusionCharts from 'fusioncharts';
// import * as Charts from 'fusioncharts/fusioncharts.charts';
// import * as Fint from 'fusioncharts/themes/fusioncharts.theme.fint';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    // FusionChartsModule.forRoot(FusionCharts, Charts),
    HttpClientModule
  ],
  providers: [BitcoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }