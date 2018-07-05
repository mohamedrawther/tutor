import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {routing} from "./app-routing.module";
import { FileNotFoundComponent } from './error/file-not-found/file-not-found.component';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    FileNotFoundComponent    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}),
    FormsModule,
    ReactiveFormsModule,    
    routing
  ],
  providers: [LoggerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
