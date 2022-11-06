import { Component, OnInit } from '@angular/core';
import { Bio } from './bio.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  
  myBio: Bio = new Bio(
    'https://avatars.githubusercontent.com/u/8934009?v=4',
    'Andrew Marshall',
    'Fullstack Software Engineer I - Emerging Tech',
    'Rutgers University, New Brunswick',
    'I grew up in northern NJ. I graduated from Rutgers in 2017 with a BS in Computer Science with a second major in English. Since then, I have been working as a Software Engineer at various companies.'
  )

  constructor() { }

  ngOnInit(): void {
  }

}
