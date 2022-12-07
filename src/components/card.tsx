import React from 'react';
import styled from 'styled-components';
import { SEARCH_STATE } from '../assets/searchState';

const Filp = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 30px;
  perspective: 1100px;

  &.on>div{
    transform: rotateY(180deg);
  }
`;

const CardWrap = styled.div`
  width: 100%; 
  height: 100%;
  position: relative;
  transition: .4s;
  transform-style: preserve-3d;
  border-radius: 30px;
`;

const Front = styled.div`
  position: absolute;
  width: 100%; 
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  background-color: #fff;
  border: 2px solid #3762a9;
  border-radius: 30px;
  transform: rotateY(180deg);
`;

const Back = styled.div`
  position: absolute;
  width: 100%; 
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  background: #3762a9; 
  border-radius: 30px;
`;

function Card({ state, children }: { state: string, children: React.ReactNode}) {
  return (
    <Filp className={(state === SEARCH_STATE.SUCCESS || state === SEARCH_STATE.FAILURE) ? 'on' : undefined}>
      <CardWrap>
      {(state === SEARCH_STATE.SUCCESS || state === SEARCH_STATE.FAILURE)
        ?<>
          <Front>
            {children}
          </Front>
          <Back />
        </>
        :<>
          <Front />
          <Back>
            {children}
          </Back>
        </>
      }
      </CardWrap>
    </Filp>
  )
}

export default Card;