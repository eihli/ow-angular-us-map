export interface State {
  fill: string;
  name: string;
}

export interface StateConfig {
  [key: string]: State;
}
