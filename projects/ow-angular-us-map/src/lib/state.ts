export class State {
  constructor(
    public name: string,
    public fill: string
  ) {}
}

export interface StateConfig {
  [key: string]: State;
}
