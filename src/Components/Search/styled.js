import styled from "styled-components";

export const SearchHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 568px) {
    flex-direction: row;
  }
`;
export const Title = styled.h1`
  margin: 0 1.25rem 0 0;

  font-size: 1.875rem;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: -0.25rem;

  color: white;
`;
export const Input = styled.input`
  width: 90%;
  padding: 0.313rem;
  margin: 0.625rem 0;
  border-radius: 1.25rem;

  @media (min-width: 768px) {
    width: 250px;
    margin-right: 0.625rem;
  }
`;

export const Button = styled.button`
  width: 90%;
  border-radius: 1.25rem;
  font-size: 0.938rem;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;

  color: black;
  background: yellow;
  
  cursor: pointer;

  @media (min-width: 768px) {
    width: fit-content;
    margin-right: 0.625rem;
  }
`;
