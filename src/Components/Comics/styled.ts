import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 80%;
  margin: 1.25rem 0;
  padding: 1.25rem;
  border-radius: 0.313rem;

  background: #e63a2e;

  @media (min-width: 960px) {
    width: 800px;
  }
`;
export const Title = styled.h1`
  margin: 0.625rem 0 1.25rem;

  text-align: center;
  font-size: 1.563rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Hq = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;
export const Cover = styled.img`
  width: 90%;

  box-shadow: 0.625rem 0.625rem #000000c9;

  @media (min-width: 960px) {
    width: 35%;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Sinopse = styled.p`
  margin: 1.25rem 1.25rem 1.25rem 2.5rem;

  font-size: 0.938rem;
  font-style: italic;
  font-weight: bold;

  color: white;
`;
