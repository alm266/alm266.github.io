import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './bio/bio.component';
import { CareerComponent } from './career/career.component';
import { CareerEntryComponent } from './career/career-entry/career-entry.component';
import { CareerListComponent } from './career/career-list/career-list.component';
import { CareerDetailsComponent } from './career/career-details/career-details.component';
import { MaterialModule } from './material/material.module';
import { ProjectsComponent } from './projects/projects.component';
import { MatAutocompleteModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BioComponent, CareerComponent, CareerEntryComponent, CareerListComponent, CareerDetailsComponent, ProjectsComponent
  ],
  
  imports: [
    BrowserModule, 
    MaterialModule, 
    MatStepperModule, 
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule, 
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
