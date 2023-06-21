import React from 'react'
import Head from 'next/head'
import * as S from '../../styles/pagesStyle/home/styled'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { useMediaQuery } from '@material-ui/core'

export default function HomePage() {
    const isMobile = useMediaQuery("(max-width:768px)");

    return (
        <S.Page>
            <Head>
                <title>Marvel</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" />
            </Head>
            <Header />
            <S.Background >
                {isMobile ?
                    <S.Image src='https://pngimg.com/d/wolverine_PNG41.png' /> :
                    <S.Image src='https://i.pinimg.com/originals/6d/c3/43/6dc3434f2716cb47130a3551f74c7a43.png' />}
            </S.Background>
            <Footer />
        </S.Page>

    )
}
