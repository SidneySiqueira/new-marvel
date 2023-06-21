import React from 'react'
import * as S from './styled'

interface ComicsProps {
  titleComic: string, 
  imageComic: string, 
  sinopse: string
}

export default function Comics({titleComic, imageComic, sinopse}: ComicsProps) {
  return (
    <S.Background>
        <S.Title>{titleComic}</S.Title>
        <S.Hq>
          <S.Cover src={imageComic} />
          <S.Description>
          <S.Sinopse>{sinopse? sinopse : "Don't have information"}</S.Sinopse>
          </S.Description>
        </S.Hq>
    </S.Background>
  )
}
