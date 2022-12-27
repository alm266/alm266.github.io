import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  title = 'Projects';
  projects: Project[];

  ngOnInit(): void {
    this.projects = [
      new Project(
        "",
        "Project Landslide",
        `Designed and implemented UI for loading and displaying hand of cards created using 
        C# and Unity's UI library ending successfully with a UI usable on both PC with mouse 
        and mobile with touch. Built multiplayer networked matches by utilizing Mirror API 
        allowing for peer-to-peer games to be played remotely.`
      ),
      new Project(
        "",
        "OxelBot",
        `Created a Twitter bot that tweets a random word and one of its definitions at set 
        intervals using python and the Twitter API resulting in an automated bot that posts 
        a word every 24 hours`
      ),
      new Project(
        "",
        "Expense App",
        `Build web application to enter, track and delete items with expenses created using 
        React resulting in an app with a reactive front end and organized backend`
      ),
      new Project(
        "",
        "Personal Portfolio",
        `Designed and built a web application to display my work and history of projects 
        created using Angular and Angular Materials and resulting in an organized and responsive 
        application that gives gives a synopsis of the things that I have worked on in my coding 
        career.`
      )
    ]
  }
}
