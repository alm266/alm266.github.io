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
        `Built enemy behaviors by implementing behaviors trees and state machines using C# 
          delegate functions completed about 15 unique enemy behaviors on schedule for the project's launch.
          Conceptualized and created designer facing tool to allow metadata to be updated via an online spreadsheet 
          using C#, Unity framework and text parsing tools delivered a working tool which allowed designers to make 
          changes more easily. Deployed and tested iOS, Android and PC builds by utilizing Unity framework and was 
          able to iterate builds twice per week and update content according to testing feedback. Implemented 
          systems to allow for procedurally generating minigames at runtime that pull elements from selected genres 
          by building a robust Prototype pattern on top of an open source Entity-Component system; was able to maintain 
          roughly 200 unique component properties that could be added and removed during runtime without creating large 
          classes with lots of unused allocated data. Authored and maintainable codebase easily worked on by 
          multiple engineers at a time by following a Model-View-Controller pattern across C# systemswhich resulted 
          in modulized isolated systems that saved the engineering team time when navigating and editing the codebase.`,
        'https://i0.wp.com/www.digitalcontinue.com/wp-content/uploads/2019/11/cropped-DigitalContinue_top_.png?fit=1031%2C359&ssl=1'
      ),
    new CareerEntry(
      'Triple C. Technologies',
      'Software Engineer',
      ['Feb 2021', 'April 2021'],
      `Built live demonstration for C.E.L. Safety System. Designed and build virtual demonstration in C# and exported to 
        WebGLending with over 100 views in the first 3 hours from prospective clients. Collaborated with with team of 
        engineers via video call and group message multiple times a day resulting in the project arriving within the 45 
        day limit, being completed to the satisfaction of our contractor and posted to the website successfully.`,
      'https://images.squarespace-cdn.com/content/v1/5f0e881a913cd20e05182a26/1596632291588-A0JLCCBZIW6ORMIK3YMV/TripleCTechLogo%28fix%29.png?format=1500w'
    ),
    new CareerEntry(
      'Statespace Labs',
      'Unity Engineer (Contract)',
      ['Aug 2021', 'Oct 2021'],
      `Maintained and created new features for the evolving Aimlab platform. Resolved bugs with the code base by running 
        unit tests and using the debugger which enabled me to fix several bugs in my first 2 weeks with the code base. Made 
        builds for QA testers by deploying fixes to branches and hosting them on Jenkins allowing testers to work efficiently 
        to verify fixes and increase the turnaround time of bug fixes. Built usable portal for collobrative event with 1047 
        Games team by creating prefab including a camera, VFX, camera masks and scripted logic resulting in a placeable item 
        that had the effect of being seen through on both ends and teleporting to player when they walked into it.`,
      'https://mms.businesswire.com/media/20211102005937/en/922640/5/statespace-logo_dark-version.jpg?download=1'
    ),
    new CareerEntry(
      'Price Manager',
      'Data Manager',
      ['Feb 2022', 'June 2022'],
      `Worked with online web scrapers to collect pricing and sku info of clients\' competitors. Managed about a dozen client 
        accounts by scraping competitors pricing information using our internal tools resulting in updating sales information of 
        thousands of product SKUs keeping up to date pricing as well as other info`,
      'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_0332c8abade06283a29471f11c0571a2/pricemanager.png'
    ),
    new CareerEntry(
      'Burlington',
      'Fullstack Engineer I - Emerging Tech',
      ['July 2022', 'Present'],
      `Building, maintaining and testing new libraries for wider company usage. Building and supporting the Order Approval 
        Tool using Angular and Angular-Material to allowing the merchandising team to process clothing orders more efficiently 
        using in house technology. Created API for internal company use using Oracle DB and Javascript allowing other IT teams 
        to easily pull data regarding what merchants own what product orders.`,
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
