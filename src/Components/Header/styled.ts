import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    background: #e63a2e;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 1380px;
    padding: 0.625rem 0;

    background: #e63a2e;

    @media (min-width: 568px) {
    flex-direction: row;

    padding: 0.625rem 3.125rem 0.625rem 0;
  }
`
export const Image = styled.img`
    height: 35px;  
    margin-left: 1.25rem;  

    cursor: pointer;
`