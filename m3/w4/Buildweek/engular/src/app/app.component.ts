import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BuildWeek3';
  constructor(private titleService: Title) { }

  ngOninit(){
    this.titleService.setTitle('Home page');

  }
}
