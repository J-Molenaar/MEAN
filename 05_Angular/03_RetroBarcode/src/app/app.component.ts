import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors: Array<string> = [
      'DarkSlateBlue',
      'CornflowerBlue',
      'Cornsilk',
      'DarkCyan',
      'DarkGoldenRod',
      'DarkSeaGreen',
      'DimGrey',
      'FireBrick',
      'White'
  ]
  random_num = this.randomColor();

  randomColor(){
      var random_num = [];
      for(var i = 0; i<100; i++){
          random_num.push(Math.floor(Math.random()*10));
      }
      return random_num;
  }
}
