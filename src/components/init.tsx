import styled from 'styled-components';

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    opacity: 0.3;
    text-shadow: 0 0 10px rgba(0,0,0,1);
  }
`;

function Init() {
  return (
    <CardInner>
      <p>
        Search Your Pokemon!
      </p>
    </CardInner>
  )
}

export default Init;