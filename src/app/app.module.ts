import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Utils } from './Utils/Utils';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [Utils],
  bootstrap: [AppComponent]
})
export class AppModule { }
