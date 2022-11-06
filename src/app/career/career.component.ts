import { Component, OnInit } from '@angular/core';
import { CareerEntry } from './career-entry.model';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  selectedEntry: CareerEntry;

  constructor() { }

  ngOnInit(): void {
  }

}
