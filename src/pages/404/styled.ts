import styled from 'styled-components';

export const Error = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;

    font-size: 1.875rem;
`
export const Image = styled.img`
    width: 300px;
`

export const h1 = styled.h1`
    border-radius: 0.313rem;

    background: #e63a2e;
    color: white;
`

export const p = styled.p`
    border-radius: 0.313rem;

    background: #e63a2e;
    color: white;
`

export const Link = styled.a`
    border-radius: 0.313rem;

    color: blue;
    background: white;
    text-transform: capitalize;
    
    :hover {
        text-decoration: underline;
    }
`