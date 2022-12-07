import styled from 'styled-components';

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10%;

  p{
    font-size: 30px;
    font-weight: 700;
    color: #3762a9; //#ef5350;
    span{
      display: block;
      font-size: 48px;
      color: #000;
    }
  }
`;

function Failure() {
  return (
    <CardInner>
      <p>
        <span>No</span> search results found.
      </p>
      <p>
        Please check <span>your ID</span> you entered.
      </p>
    </CardInner>
  )
}

export default Failure;