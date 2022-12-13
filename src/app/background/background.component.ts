import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getURL() {
    return "url('https://static-cse.canva.com/blob/571508/Patterns303.e4f86058.jpg')";
  }

}
