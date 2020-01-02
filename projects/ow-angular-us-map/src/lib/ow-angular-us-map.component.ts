import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ow-angular-us-map',
  templateUrl: 'ow-angular-us-map.component.html',
  styles: []
})
export class OwAngularUsMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleClick(event) {
    console.log(event);
  }

  onMouseEnter(event) {
    console.log(event);
  }

  onMouseLeave(event) {
    console.log(event)
  }

}
