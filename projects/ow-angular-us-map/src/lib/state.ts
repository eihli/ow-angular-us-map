export class State {
  constructor(
    public name: string,
    public fill: string
  ) {}
}

export interface StateConfig {
  stroke: string;
  strokeWidth: number;
  states: {[key: string]: State};
}
