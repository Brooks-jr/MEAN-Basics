import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Time Zone Display';
  time = new Date();

  displayTime(zone)
  {
    this.time = new Date();
    if (zone === 'MST')
    {
      this.time.setHours(this.time.getHours() + 1);
    }
  }
}
