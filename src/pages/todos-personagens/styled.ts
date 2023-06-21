import styled from 'styled-components';

export const Page = styled.main`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Body = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 1360;
`

export const Image = styled.img`
    width: 30%;
    max-width: 900px;
    margin-top: 3.125rem;
    margin-bottom: 3.125rem;
    
    cursor: pointer;
`