import React from 'react'
import Head from 'next/head'
import * as S from '../../styles/pagesStyle/404/styled'

const Maintenance = () => {
    return (
        <>
            <Head>
                <title>404 Error</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" />
            </Head>
            <S.Error>
                <S.Image src='https://www.imagensempng.com.br/wp-content/uploads/2021/05/16-1.png' />
                <S.Title>Sorry, we&apos;re doen for maintenance</S.Title>
                <S.Text>We&apos;llbe back shortly</S.Text>
                <S.Link href='/home'> click to be directed</S.Link>
            </S.Error>
        </>

    )
}

export default Maintenance;