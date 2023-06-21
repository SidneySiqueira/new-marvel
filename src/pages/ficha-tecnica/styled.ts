import styled from "styled-components";

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Loading = styled.div`
  height: 900px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  text-align: center;
  font-size: 3.125rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;

  color: #ffffff;
  background-color: #e63a2e;
`;
