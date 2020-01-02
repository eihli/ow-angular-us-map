import { Component } from '@angular/core';

import { StateConfig } from 'ow-angular-us-map';

const stateConfig: StateConfig = {
  hi: {
    name: "Hawaii",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ak: {
    name: "Alaska",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  fl: {
    name: "Florida",
    inactive: "no",
    hide: "no",
    fill: "grey"
  },
  nh: {
    name: "New Hampshire",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  vt: {
    name: "Vermont",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  me: {
    name: "Maine",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ri: {
    name: "Rhode Island",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ny: {
    name: "New York",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  pa: {
    name: "Pennsylvania",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  nj: {
    name: "New Jersey",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  de: {
    name: "Delaware",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  md: {
    name: "Maryland",
    hide: "no",
    inactive: "no",
    fill: "#CCFFCC"
  },
  va: {
    name: "Virginia",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  wv: {
    name: "West Virginia",
    hide: "no",
    inactive: "no",
    fill: "#CCFFCC"
  },
  oh: {
    name: "Ohio",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  in: {
    name: "Indiana",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  il: {
    name: "Illinois",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ct: {
    name: "Connecticut",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  wi: {
    name: "Wisconsin",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  nc: {
    name: "North Carolina",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  dc: {
    name: "District of Columbia",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ma: {
    name: "Massachusetts",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  tn: {
    name: "Tennessee",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ar: {
    name: "Arkansas",
    hide: "no",
    inactive: "no",
    fill: "#CCFFCC"
  },
  mo: {
    name: "Missouri",
    hide: "no",
    inactive: "no",
    fill: "#CCFFCC"
  },
  ga: {
    name: "Georgia",
    hide: "no",
    inactive: "no",
    fill: "#CCFFCC"
  },
  sc: {
    name: "South Carolina",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ky: {
    name: "Kentucky",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  al: {
    name: "Alabama",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  la: {
    name: "Louisiana",
    hide: "no",
    inactive: "no",
    fill: "#CCFFCC"
  },
  ms: {
    name: "Mississippi",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ia: {
    name: "Iowa",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  mn: {
    name: "Minnesota",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ok: {
    name: "Oklahoma",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  tx: {
    name: "Texas",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  nm: {
    name: "New Mexico",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ks: {
    name: "Kansas",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ne: {
    name: "Nebraska",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  sd: {
    name: "South Dakota",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  nd: {
    name: "North Dakota",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  wy: {
    name: "Wyoming",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  mt: {
    name: "Montana",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  co: {
    name: "Colorado",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ut: {
    name: "Utah",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  az: {
    name: "Arizona",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  nv: {
    name: "Nevada",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  or: {
    name: "Oregon",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  wa: {
    name: "Washington",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  ca: {
    name: "California",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  mi: {
    name: "Michigan",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  id: {
    name: "Idaho",
    hide: "no",
    inactive: "no",
    fill: "grey"
  },
  vi: {
    name: "Virgin Islands",
    hide: "yes",
    inactive: "no",
    fill: "grey"
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example';
  stateConfig = stateConfig;
}
