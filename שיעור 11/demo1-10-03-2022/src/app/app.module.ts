import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { SimpleButtonComponent } from './simple-button/simple-button.component';
import { ManyEventsComponent } from './many-events/many-events.component';
import { TempMeterComponent } from './temp-meter/temp-meter.component';
import { CounterComponent } from './counter/counter.component';
import { Copyright2Component } from './copyright2/copyright2.component';
import { AuthModule } from './auth/auth.module';
import { SimpleButton2Component } from './simple-button2/simple-button2.component';
import { MultipleEventsComponent } from './multiple-events/multiple-events.component';
import { TempratureComponent } from './temprature/temprature.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserDetailsComponent,
    CopyrightComponent,
    SimpleButtonComponent,
    ManyEventsComponent,
    TempMeterComponent,
    CounterComponent,
    Copyright2Component,
    SimpleButton2Component,
    MultipleEventsComponent,
    TempratureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UserAuthModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
