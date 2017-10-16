import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Registration';
  
  users = [];
  user = new User();
  

  onSubmit(){
    
    this.user = new User();
    this.users.push(this.user);
    
  }

}
