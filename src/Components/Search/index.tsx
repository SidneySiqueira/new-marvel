import React, { useEffect, useState } from "react";
import * as S from './styled'
import { searchHero } from "@/api";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/Redux/store";
import { useDispatch } from "react-redux";
import { setHeroes } from "@/Redux/heroesReducerSlice";
import { useRouter } from "next/router";

export default function Search() {
  const [typing, setTyping] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter()

  const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

  useEffect(() => {
    sessionStorage.setItem('nameHero', typing);
  },[typing])

  const handleSubmit = async () => {
    if (!isSearching) {
      setIsSearching(true);
      try {
        const response = await searchHero(typing);
        dispatch(setHeroes(response))
      } catch (error) {
        console.error('Erro na busca do herói:', error);
      } finally {
        setIsSearching(false);
      }
      router.push('/todos-personagens')
    }
  }

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <>
      <S.SearchHero>
        <S.Title>Super-hero</S.Title>
        <S.Input
          onChange={(e) => setTyping(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <S.Button
          id="submit"
          onClick={handleSubmit}
        >
          Buscar
        </S.Button>
      </S.SearchHero>
    </>
  );
}
