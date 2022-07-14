import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './bio/bio.component';
import { CareerComponent } from './career/career.component';
import { CareerEntryComponent } from './career/career-entry/career-entry.component';
import { CareerListComponent } from './career/career-list/career-list.component';
import { CareerDetailsComponent } from './career/career-details/career-details.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BioComponent, CareerComponent, CareerEntryComponent, CareerListComponent, CareerDetailsComponent
  ],
  imports: [
    BrowserModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
