import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State, StateConfig } from '../lib/state';


@Component({
  selector: 'lib-ow-angular-us-map',
  templateUrl: 'ow-angular-us-map.component.html',
  styles: []
})
export class OwAngularUsMapComponent implements OnInit {
  @Input() stateConfig: StateConfig;
  @Output() stateClicked: EventEmitter<State> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.stateConfig)
    this.stateClicked.subscribe(event => console.log(event));
  }

  handleClick(event) {
    let stateAbbr = event.target.getAttribute("id").toLowerCase();
    let fill = event.target.getAttribute("fill");
    let state = new State(stateAbbr, fill)
    this.stateClicked.emit(state);
  }

  onMouseEnter(event) {
    event.target.setAttribute("fill", "#" + this.adjColor(event.target.getAttribute("fill").slice(1), -0.1));
  }

  onMouseLeave(event) {
    let stateAbbr = event.target.getAttribute("id").toLowerCase();
    event.target.setAttribute("fill", this.stateConfig[stateAbbr].fill);
  }

  adjColor(color, adjPercentage) {
    let colorInt = parseInt(color, 16);
    let r = colorInt >> 16;
    let b = (colorInt >> 8) & 0X00FF;
    let g = colorInt & 0X0000FF;
    [r, b, g] = [r + r * adjPercentage, b + b * adjPercentage, g + g * adjPercentage];
    let rbg = [r, b, g].map((color) => {
      color = Math.round(color + color * adjPercentage);
      let hexColor = color.toString(16).padStart(2, '0');
      return hexColor;
    })
    return rbg.join('')
  }

}
