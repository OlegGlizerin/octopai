import { Component } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-boxes-component',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent {
  box1Color: string = "coral";
  box2Color: string = "cyan";
  box3Color: string = "yellow";
  getSelectedValue(event: any) {
    var newValue = event.target.value;
    switch (event.target.name) {
      case "box1":
        this.box1Color = newValue;
        break;
      case "box2":
        this.box2Color = newValue;
        break;
      case "box3":
        this.box3Color = newValue;
        break;
    }
  }
}
