import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatDivider, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatStepperModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materials = [
  BrowserModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatToolbarModule,
  MatStepperModule,
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatStepperModule,
  ],
  exports: [
    MatButtonModule
  ]
})
export class MaterialModule { }
