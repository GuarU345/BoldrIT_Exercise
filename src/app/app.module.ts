import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { WorksserviceService } from './Components/worksservice.service';
import { SpecifiedworkComponent } from './Components/specifiedwork/specifiedwork.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpecifiedworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WorksserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
