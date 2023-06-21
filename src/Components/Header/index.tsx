import React from 'react'
import * as S from './styled'
import Search from '../Search';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter()

    const handleHomePage = () => {
        router.push('/')
    }
    return (
        <S.Container>
            <S.Wrapper>
                <S.Image src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg' onClick={handleHomePage} />
                <Search />
            </S.Wrapper>
        </S.Container>
    )
}
