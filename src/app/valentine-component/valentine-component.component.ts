import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-valentine-component',
  imports: [CommonModule],
  templateUrl: './valentine-component.component.html',
  styleUrl: './valentine-component.component.scss'
})
export class ValentineComponentComponent {
  message1: string = "Dear Kaajal";
  message2: string = "Will you be my Valentine? ❤️"
  gifSource: string = "valentine.gif";
  isYesClicked: boolean = false;

sayNo() {
throw new Error('Method not implemented.');
}
sayYes() {
  this.message1 = "LETS GOOOO";
  this.message2="";
  this.gifSource = "celebration.gif";
  this.isYesClicked = true;
}
response: any;

}
