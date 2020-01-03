import { Component } from '@angular/core';

import { StateConfig, State } from 'ow-angular-us-map';

const stateConfig: StateConfig = {
  stroke: "#000000",
  strokeWidth: 2,
  states: {
    hi: {
      name: "Hawaii",
      fill: "#D9D9D9"
    },
    ak: {
      name: "Alaska",
      fill: "#D9D9D9"
    },
    fl: {
      name: "Florida",
      fill: "#D9D9D9"
    },
    nh: {
      name: "New Hampshire",
      fill: "#D9D9D9"
    },
    vt: {
      name: "Vermont",
      fill: "#D9D9D9"
    },
    me: {
      name: "Maine",
      fill: "#D9D9D9"
    },
    ri: {
      name: "Rhode Island",
      fill: "#D9D9D9"
    },
    ny: {
      name: "New York",
      fill: "#D9D9D9"
    },
    pa: {
      name: "Pennsylvania",
      fill: "#D9D9D9"
    },
    nj: {
      name: "New Jersey",
      fill: "#D9D9D9"
    },
    de: {
      name: "Delaware",
      fill: "#D9D9D9"
    },
    md: {
      name: "Maryland",
      fill: "#00FA9A"
    },
    va: {
      name: "Virginia",
      fill: "#D9D9D9"
    },
    wv: {
      name: "West Virginia",
      fill: "#00FA9A"
    },
    oh: {
      name: "Ohio",
      fill: "#D9D9D9"
    },
    in: {
      name: "Indiana",
      fill: "#D9D9D9"
    },
    il: {
      name: "Illinois",
      fill: "#D9D9D9"
    },
    ct: {
      name: "Connecticut",
      fill: "#D9D9D9"
    },
    wi: {
      name: "Wisconsin",
      fill: "#D9D9D9"
    },
    nc: {
      name: "North Carolina",
      fill: "#D9D9D9"
    },
    dc: {
      name: "District of Columbia",
      fill: "#D9D9D9"
    },
    ma: {
      name: "Massachusetts",
      fill: "#D9D9D9"
    },
    tn: {
      name: "Tennessee",
      fill: "#D9D9D9"
    },
    ar: {
      name: "Arkansas",
      fill: "#00FA9A"
    },
    mo: {
      name: "Missouri",
      fill: "#00FA9A"
    },
    ga: {
      name: "Georgia",
      fill: "#00FA9A"
    },
    sc: {
      name: "South Carolina",
      fill: "#D9D9D9"
    },
    ky: {
      name: "Kentucky",
      fill: "#D9D9D9"
    },
    al: {
      name: "Alabama",
      fill: "#D9D9D9"
    },
    la: {
      name: "Louisiana",
      fill: "#00FA9A"
    },
    ms: {
      name: "Mississippi",
      fill: "#D9D9D9"
    },
    ia: {
      name: "Iowa",
      fill: "#D9D9D9"
    },
    mn: {
      name: "Minnesota",
      fill: "#D9D9D9"
    },
    ok: {
      name: "Oklahoma",
      fill: "#D9D9D9"
    },
    tx: {
      name: "Texas",
      fill: "#D9D9D9"
    },
    nm: {
      name: "New Mexico",
      fill: "#D9D9D9"
    },
    ks: {
      name: "Kansas",
      fill: "#D9D9D9"
    },
    ne: {
      name: "Nebraska",
      fill: "#D9D9D9"
    },
    sd: {
      name: "South Dakota",
      fill: "#D9D9D9"
    },
    nd: {
      name: "North Dakota",
      fill: "#D9D9D9"
    },
    wy: {
      name: "Wyoming",
      fill: "#D9D9D9"
    },
    mt: {
      name: "Montana",
      fill: "#D9D9D9"
    },
    co: {
      name: "Colorado",
      fill: "#D9D9D9"
    },
    ut: {
      name: "Utah",
      fill: "#D9D9D9"
    },
    az: {
      name: "Arizona",
      fill: "#D9D9D9"
    },
    nv: {
      name: "Nevada",
      fill: "#D9D9D9"
    },
    or: {
      name: "Oregon",
      fill: "#D9D9D9"
    },
    wa: {
      name: "Washington",
      fill: "#D9D9D9"
    },
    ca: {
      name: "California",
      fill: "#D9D9D9"
    },
    mi: {
      name: "Michigan",
      fill: "#D9D9D9"
    },
    id: {
      name: "Idaho",
      fill: "#D9D9D9"
    },
    vi: {
      name: "Virgin Islands",
      fill: "#D9D9D9"
    }
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

  handleClick(state: State) {
    console.log(state.name + " clicked");
  }
}
