import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 36px;
  line-height: 1;
  margin-top: 80px;
  text-shadow: 0 -10px 30px rgba(0,0,0,0.3);
  letter-spacing: -2px;
  color: #3762a9;

  &::after{
    content: 'PokeQuery';
    display: block;
    position: absolute;
    z-index: -1;
    transform: rotate(-180deg) scaleX(-1) scaleY(50%) translateY(30%);
    opacity: 0.05;
  }

  @media screen and (max-width: 540px){
    margin-top: 30px;
  }
`;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Main>
      <Title>PokeQuery</Title>
      {children}
    </Main>
  )
}

export default Layout;