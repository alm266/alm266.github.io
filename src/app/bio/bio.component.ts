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
    `I grew up in northern NJ and graduated from Rutgers in 2017 with a BS in Computer Science and a second 
      major in English. Since then, I have been working as a Software Engineer and Programmer at various 
      companies. I'm the youngest of my 3 siblings, of which is also a professional Software Engineer in NYC. 
      For fun, I enjoy gaming, playing guitar and playing pickup backetball games at the gym.`
  )

  constructor() { }

  ngOnInit(): void {
  }

}
