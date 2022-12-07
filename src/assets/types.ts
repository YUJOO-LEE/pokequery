export interface TypePokemon {
  weight: number;
  height: number;
  types: Array<{ type: { name: string }}>;
  name: string;
  image: string;
}

export interface TypeSearchState {
  INIT: string,
  LOADING: string,
  SUCCESS: string,
  FAILURE: string,
  EMPTY: string,
}