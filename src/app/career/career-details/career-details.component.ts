import { Component, Input, OnInit } from '@angular/core';
import { CareerEntry } from '../career-entry.model';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css']
})
export class CareerDetailsComponent implements OnInit {
  @Input() entry: CareerEntry;

  constructor() { }

  ngOnInit(): void {
  }

}
