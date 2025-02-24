import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'lab4';
  count: number = 0;
  //variable is displayed on the button text 
  //in app.component.html through databinding
  show: boolean = true;
  onButtonClick(){//Data Binded to the button in app.component.html to 
    //print to console and update the count variable

    console.log("Button Clicked");
    this.count++;
  }

  onStarDBLClick(){//Data Binded to the star image when double clicked in app.component.html
    //and changes the value of the show boolean which dictates whether the text below the image is
    if (this.show){
      this.show = false;
    }else{
      this.show = true;
    }
  }
}

