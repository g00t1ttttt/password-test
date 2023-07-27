import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PasswordControlModule } from './password-form-control/password-control.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PasswordControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
