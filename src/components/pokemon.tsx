import styled from 'styled-components';
import { TypePokemon } from "../assets/types";

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  background-image: url(${({data}: {data: TypePokemon})=> data.image});
  text-shadow: -1px 0 2px #fff, 0 1px 2px #fff, 1px 0 2px #fff, 0 -1px 2px #fff;

  h2{
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    color: #000;
  }

  .types{
    color: #3762a9;
    flex: 1;
  }
`;

function Pokemon({ data }: { data: TypePokemon }) {
  return (
    <CardInner data={data}>
      <p className='no'>No.{data.id}</p>
      <h2>{data.name}</h2>
      <div className='types'>
        {data.types.map(item=><p key={`slot${item.slot}`}>{item.type.name}</p>)}
      </div>
      <p className='body'>
        {data.weight / 10}kg / {data.height / 10}m
      </p>
    </CardInner>
  )
}

export default Pokemon;