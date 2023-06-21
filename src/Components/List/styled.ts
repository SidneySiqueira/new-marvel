import styled from "styled-components";

export const Board = styled.div`
  width: 300px;
  height: 400px;
  margin: 0.938rem 0.938rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  background: #ffffff99;
  border: 0.313rem #3b58a9 solid;

  cursor: pointer;
`;
export const Picture = styled.div`
  width: 250px;
  height: 250px;

  display: flex;
  align-items: center;

  overflow: hidden;
`;
export const Image = styled.img`
  width: 250px;
`;

export const Hero = styled.p`
  font-size: 1.25rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
