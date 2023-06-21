import styled from "styled-components";

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 90%;

  max-width: 900px;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;

  cursor: pointer;

  @media (min-width: 768px) {
    width: 35%;
  }
`;
