import React, { useEffect } from 'react'
import Head from 'next/head'
import * as S from './styled'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import List from '@/Components/List'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/Redux/store'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { searchHero } from '@/api'
import { setHeroes } from '@/Redux/heroesReducerSlice'
import { useRouter } from 'next/router'
import NotResults from '@/Components/NotResults'

export default function AllCharacters() {
    const router = useRouter()
    const heroes = useSelector((state: RootState) => state.heroesReducer.heroes);

    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    useEffect(() => {

        const hero = sessionStorage.getItem('nameHero')

        if (hero) {
            const fetchData = async () => {
                try {
                    const response = await searchHero(hero);                    
                    dispatch(setHeroes(response));
                } catch (error) {
                    console.error('Erro na busca do herói:', error);
                }
            };
            fetchData();
        }
    }, []);

    const handleSelectHero = (id: number) => {
        sessionStorage.setItem('idHero', id.toString());
        router.push('/ficha-tecnica')
    }

    return (
        <S.Page>
            <Head>
                <title>Marvel</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" />
            </Head>
            <Header />
            {heroes.length > 0 ?
                <S.Body >
                    {heroes.map((item, index: number) => (
                        <div key={index} onClick={() => handleSelectHero(item.id)}>
                            {heroes && (
                                <List
                                    name={item?.name}
                                    image={
                                        item.thumbnail?.path +
                                        "." +
                                        item.thumbnail.extension
                                    }
                                />
                            )}
                        </div>
                    ))}
                </S.Body> :
                <S.Body>
                    <NotResults />
                </S.Body>
            }
            <Footer />
        </S.Page>

    )
}
