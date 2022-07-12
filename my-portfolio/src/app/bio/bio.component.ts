import { Component, OnInit } from '@angular/core';
import { Bio } from './bio.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  
  myBio: Bio = new Bio(
    'https://www.gtlaw.com/-/media/images/team/p/person-philip-i/34485largepng.png?sc_lang=en',
    'Andrew Marshall',
    'Fullstack Software Engineer I - Emerging Tech',
    'Rutgers University, New Brunswick',
    'I have been working as a Software Engineer since 2017'
  )

  constructor() { }

  ngOnInit(): void {
  }

}
