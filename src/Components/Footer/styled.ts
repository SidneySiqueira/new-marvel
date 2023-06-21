import styled from 'styled-components';

export const Background = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;

    background: #e63a2e;
`
export const Content = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    max-width: 1360px;
    height: 100%;
    margin: 20px;

    @media (min-width: 568px) {
    flex-direction: row;
  }
`

export const Comics = styled.img`
    height: 150px; 
    
    @media (min-width: 568px) {
    flex-direction: row;
  } 
`

export const Sony = styled.img`
    height: 80px;  
`

export const Marvel = styled.img`
    height: 50px;  
`

export const Studios = styled.img`
    height: 50px;  
`