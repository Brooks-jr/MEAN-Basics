import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
  {
    title = 'Retro Barcode Generator';
    barcode = [];

    box()
      {
        for(let i = 0; i < 10; i++)
          {
            const randNum = (Math.floor(Math.random() * 6) ) + 1;

            if (randNum === 1) 
            {
              this.barcode.push('#33ffff ');
            } 
            else if (randNum === 2) 
            {
              this.barcode.push('#3366ff ');
            } 
            else if (randNum === 3) 
            {
              this.barcode.push('#3333ff ');
            } 
            else if (randNum === 4) 
            {
              this.barcode.push('#9933ff ');
            } 
            else if (randNum === 5) 
            {
              this.barcode.push('#ff3399 ');
            } 
            else if (randNum === 6) 
            {
              this.barcode.push('#ff9933');
            } 
            else if (randNum === 7) 
            {
              this.barcode.push('#99ff33');
            }
          }
      }
      ngOnInit() {
        this.box();
      }
    }
