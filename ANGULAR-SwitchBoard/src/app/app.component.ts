import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
  {
    title = 'Angular Switchboard';
    switches: any = [1,1,1,1,1,1,1,1,1,1];

    flip(i) 
      {
        this.switches[i] = !this.switches[i];
      }
  }
