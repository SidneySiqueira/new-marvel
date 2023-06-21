import styled from 'styled-components'

export const Background = styled.div`
    width: 90%;
    margin: 1.25rem 0;
    padding: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    border-radius: 0.313rem;

    background: #e63a2e;

    @media (min-width: 960px) {
    width: 800px;
  }
`
export const Title = styled.h1`
    margin: 0.625rem 0 1.25rem;

    text-align: center;
    font-size: 1.563rem;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
`
export const Period = styled.div`
    display: flex;
    flex-direction: row;
`
export const Date = styled.p`
    margin: 0.625rem;

    font-size: 0.938rem;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;

    color: white;
`
export const Cover = styled.img`
    width: 90%;

    box-shadow: 0.625rem 0.625rem #000000c9;

    @media (min-width: 960px) {
    width: 300px;
  }
`
export const Description = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: 0.938rem;
    font-style: italic;
    font-weight: bold;

    color: white;
`
