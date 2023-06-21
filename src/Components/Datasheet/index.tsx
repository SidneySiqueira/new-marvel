import React, { useState } from "react";
import * as S from './styled'
import Comics from "../Comics";
import Events from "../Events";

import { comicsId, eventsId } from "@/api";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setComics } from "@/Redux/comicsReducerSlice";
import { setEvents } from "@/Redux/eventsReducerSlice";

interface UrlProps {
  type: string,
  url: string,
}

interface DatasheetProps {
  name: string,
  image: string,
  id: string,
  description: string,
  urls: UrlProps[],
}

export default function Datasheet({
  name,
  image,
  id,
  description,
  urls,
}: DatasheetProps) {
  const [showComics, setShowComics] = useState(false)
  const [showEvents, setShowEvents] = useState(false)

  const comics = useSelector((state: RootState) => state.comicsReducer.comics);
  const events = useSelector((state: RootState) => state.eventsReducer.events);

  console.log("comics", comics);
  console.log("events", events);

  const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

  const handleSearchComics = async () => {
    if (id) {
      try {
        const response = await comicsId(id);
        dispatch(setComics(response.data.results));
        setShowComics(true)
        setShowEvents(false)
      } catch (error) {
        console.error('Erro na busca do Hq:', error);
      }
    }
  }

  const handleSearchEvents = async () => {
    if (id) {
      try {
        const response = await eventsId(id);
        dispatch(setEvents(response.data.results));
        setShowEvents(true)
        setShowComics(false)
      } catch (error) {
        console.error('Erro na busca do Evento:', error);
      }
    }
  }

  return (
    <S.Datasheet>
      <div style={{ maxWidth: '1360px' }}>
        <S.Information>
          <S.Image src={image} />
          <S.Presentation>
            <S.Name>{name}</S.Name>
            <S.Description>
              {description ? description : "Don't have information"}
            </S.Description>
            {urls.map((item) => {
              return (
                <S.Links>
                  <S.References>{item.type}:</S.References>
                  <S.Urls href={item.url} target="_blank">Click here</S.Urls>
                </S.Links>
              );
            })}
          </S.Presentation>
        </S.Information>
        <S.Shares>
          <S.Div >
            <S.Category
              onClick={handleSearchComics}
              select={showComics}
            >Comics</S.Category>
          </S.Div>
          <S.Div>
            <S.Category
              onClick={handleSearchEvents}
              select={showEvents}
            >Events</S.Category>
          </S.Div>
        </S.Shares>
        <S.Catalog>

          {showComics &&
            <>
              {comics.map((comic, index) => (
                <S.ComicsEvents key={index}>
                  {true && (
                    <Comics
                      titleComic={comic.title}
                      imageComic={comic?.thumbnail?.path + "." + comic.thumbnail.extension}
                      sinopse={comic.description}
                    />
                  )}
                </S.ComicsEvents>
              )
              )}
            </>}

          {showEvents &&
            <>
              {events.map((event, index) => (
                <S.ComicsEvents key={index}>
                  <Events
                    titleEvent={event.title}
                    imageEvent={
                      event?.thumbnail.path + "." + event.thumbnail.extension
                    }
                    descriptionEvent={event.description}
                    start={event.start}
                    end={event.end}
                  />
                </S.ComicsEvents>
              ))}
            </>}
        </S.Catalog>
      </div>
    </S.Datasheet>
  );
}
