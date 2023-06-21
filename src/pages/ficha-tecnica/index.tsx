import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import * as S from '../../styles/pagesStyle/ficha-tecnica/styled';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Datasheet from '@/Components/Datasheet';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '@/Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { searchId } from '@/api';
import { setHeroeSelect } from '@/Redux/heroeSelectReducerSlice';

export default function DataSheetPage() {
    const [searchComplete, setSearchComplete] = useState(false);
    const heroeSelect = useSelector((state: RootState) => state.heroeSelectReducer.heroeSelect);

    console.log("heroeSelect", heroeSelect);
    

    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    useEffect(() => {
        const heroSelect = sessionStorage.getItem('idHero');

        if (heroSelect) {
            const fetchData = async () => {
                try {
                    const response = await searchId(heroSelect);
                    dispatch(setHeroeSelect(response.data.results[0]));
                    setSearchComplete(true)
                } catch (error) {
                    console.error('Erro na busca do herói:', error);
                    setSearchComplete(true)
                }
            };
            fetchData();
        }
    }, []);

    const renderDatasheet = searchComplete ? (
        <Datasheet
            name={heroeSelect.name}
            id={heroeSelect.id.toString()}
            image={`${heroeSelect.thumbnail.path}.${heroeSelect.thumbnail.extension}`}
            description={heroeSelect.description}
            urls={heroeSelect.urls}
        />
    ) : <S.Loading>
        <S.Text>carregando...</S.Text>
    </S.Loading>;

    return (
        <S.Page>
            <Head>
                <title>Marvel</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" />
            </Head>
            <Header />
            <S.Body>{renderDatasheet}</S.Body>
            <Footer />
        </S.Page>
    );
}
