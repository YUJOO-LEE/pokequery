interface TypePokemonTypes {
  slot: number;
  type: { name: string };
}

export interface TypePokemon {
  id: number;
  name: string;
  image: string;
  types: Array<TypePokemonTypes>;
  weight: number;
  height: number;
}

export interface TypeSearchState {
  LOADING: string;
  SUCCESS: string;
  FAILURE: string;
  EMPTY: string;
}