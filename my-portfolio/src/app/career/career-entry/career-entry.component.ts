import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CareerEntry } from '../career-entry.model';

@Component({
  selector: 'app-career-entry',
  templateUrl: './career-entry.component.html',
  styleUrls: ['./career-entry.component.css']
})
export class CareerEntryComponent implements OnInit {
  @Input() entry: CareerEntry;
  @Output() entrySelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  
  onSelected(feature: string){
    this.entrySelected.emit();
  }

}
