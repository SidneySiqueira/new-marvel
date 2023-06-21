import React from 'react'
import * as S from './styled'

interface ListProps {
    name: string, 
    image: string,
}

export default function List({ name, image }: ListProps) {
    return (
        <S.Board>
            <S.Hero>{name}</S.Hero>
            <S.Picture>
                <S.Image src={image} />
            </S.Picture>
        </S.Board>
    )
}
