export interface TypePokemon {
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