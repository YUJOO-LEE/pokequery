import { TypePokemon } from "../assets/types";

function Pokemon({ data }: { data: TypePokemon}) {
  return (
    <div>
      <img src={data.image} alt={data.name} />
    </div>
  )
}

export default Pokemon;