import { Component, OnInit, Input } from '@angular/core';
import { StateConfig } from '../lib/state';

@Component({
  selector: 'lib-ow-angular-us-map',
  templateUrl: 'ow-angular-us-map.component.html',
  styles: []
})
export class OwAngularUsMapComponent implements OnInit {
  @Input() stateConfig: StateConfig;

  constructor() { }

  ngOnInit() {
    console.log(this.stateConfig)
  }

  handleClick(event) {}

  onMouseEnter(event) {}

  onMouseLeave(event) {}
}
