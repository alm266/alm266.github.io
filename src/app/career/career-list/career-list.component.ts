import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CareerEntry } from '../career-entry.model';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css'],
})
export class CareerListComponent implements OnInit {
  @Output() entryWasSelected = new EventEmitter<CareerEntry>()
  entries: CareerEntry[] = [
    new CareerEntry(
        'Digital Continue',
        'Software Engineer',
        ['Sept 2017', 'Sept 2020'],
        'Created game systems and behavior logic in C#',
        'https://i0.wp.com/www.digitalcontinue.com/wp-content/uploads/2019/11/cropped-DigitalContinue_top_.png?fit=1031%2C359&ssl=1'
      ),
    new CareerEntry(
      'Triple C Technologies',
      'Software Engineer (Contract)',
      ['Feb 2020', 'Apr 2020'],
      'Built live demonstration for C.E.L. Safety System',
      'https://images.squarespace-cdn.com/content/v1/5f0e881a913cd20e05182a26/1596632291588-A0JLCCBZIW6ORMIK3YMV/TripleCTechLogo%28fix%29.png?format=1500w'
    ),
    new CareerEntry(
      'Statespace Labs',
      'Unity Engineer (Contract)',
      ['Aug 2021', 'Oct 2021'],
      'Maintained and created new features for the evolving Aimlab platform',
      'https://mms.businesswire.com/media/20211102005937/en/922640/5/statespace-logo_dark-version.jpg?download=1'
    ),
    new CareerEntry(
      'Price Manager',
      'Data Manager',
      ['Feb 2022', 'June 2022'],
      'Worked with online web scrapers to collect pricing and sku info of clients\' competitors',
      'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_0332c8abade06283a29471f11c0571a2/pricemanager.png'
    ),
    new CareerEntry(
      'Burlington',
      'Fullstack Engineer I - Emerging Tech',
      ['July 2022', 'Present'],
      'Building, maintaining and testing new libraries for wider company usage',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Burlington_Stores_logo.svg/2560px-Burlington_Stores_logo.svg.png'
    )
  ];

  constructor() {}

  ngOnInit() {
    this.onEntrySelected(this.entries[0])
  }

  onEntrySelected(entry: CareerEntry){
    this.entryWasSelected.emit(entry);
  }
}
