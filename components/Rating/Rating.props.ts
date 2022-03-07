import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  //будет элемент редактируемый или нет
  isEditable?: boolean,
  //рейтинг (количество закрашеных звезд)
  rating: number,
  //изменение рейтинга
  setRating?: (rating: number) => void
}