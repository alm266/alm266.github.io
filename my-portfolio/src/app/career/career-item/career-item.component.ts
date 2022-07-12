import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CareerEntry } from '../career-entry.model';

@Component({
  selector: 'app-career-item',
  templateUrl: './career-item.component.html',
  styleUrls: ['./career-item.component.css']
})
export class CareerItemComponent implements OnInit {
  @Input() entry: CareerEntry;
  @Output() entrySelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(feature: string){
    this.entrySelected.emit();
  }
}
