import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	NgbModule,
	NgbModule.forRoot(),
	FormsModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
