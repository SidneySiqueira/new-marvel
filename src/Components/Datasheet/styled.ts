import styled from "styled-components";

interface Props {
  select: boolean;
}

export const Datasheet = styled.div`
  width: 100%;
  padding: 0.938rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  background: #ffffff99;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Presentation = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 90%;
  margin: 0.625rem 3.125rem 1.25rem 0.625rem;

  @media (min-width: 768px) {
    width: 500px;
  }
`;
export const Name = styled.p`
  margin: 1.875rem;
  padding: 0.625rem;
  border-radius: 0.625rem;

  font-size: 2.5rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;

  background: white;
`;
export const Description = styled.p`
  padding: 0.625rem;

  font-size: 1.25rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0.625rem;

  background: white;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 1.25rem 0;
  border-radius: 0.625rem;

  background: white;
`;
export const References = styled.p`
  margin: 0 1.875rem 0 1.875rem;

  font-size: 1.25rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Urls = styled.a`
  display: flex;
  flex-direction: row;

  margin-right: 0.625rem;

  font-size: 1.25rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;

  :hover {
    color: blue;
    text-decoration: underline;
  }
`;

export const Shares = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;

  margin: 0.625rem 0.625rem 0;
  width: 90%;

  cursor: pointer;
  
  @media (min-width: 768px) {
    width: 30%;
  }
`;
export const Category = styled.h1<Props>`
  display: flex;
  justify-content: center;

  width: 100%;
  border-radius: 0.625rem;

  font-size: 2.5rem;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;

  color: black;
  background: ${(props) => props.select ? 'yellow' : 'white'};

  :hover {
    background: yellow;
    color: red;
    cursor: pointer;
  }
`;

export const Catalog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ComicsEvents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;