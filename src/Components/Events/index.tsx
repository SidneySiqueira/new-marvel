import React from "react";
import * as S from "./styled";
import { formattedDate } from "@/Utils/formattedDate";

interface EventsProps {
  titleEvent: string, 
  descriptionEvent: string, 
  imageEvent: string, 
  start: string, 
  end: string,
}

export default function Events({ titleEvent, descriptionEvent, imageEvent, start, end }: EventsProps) {

  return (
    <S.Background>
      <S.Title>{titleEvent}</S.Title>
      <S.Cover src={imageEvent} />
      <S.Period>
        <S.Date>Start:{formattedDate(start)}</S.Date>
        <S.Date>End:{formattedDate(end)}</S.Date>
      </S.Period>
      <S.Description>{descriptionEvent}</S.Description>
    </S.Background>
  );
}
