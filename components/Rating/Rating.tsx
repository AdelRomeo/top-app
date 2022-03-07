import React, {useEffect, useState} from 'react';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import {RatingProps} from './Rating.props';

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
  //начальный внешний вид элемента. <JSX.Element[]> - массив JSX элементов.
  //начальное состояние - массив из 5 элементов с <></> внутри
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    //вызов обновления рейтинга
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    //изменный массив для передачи в state
    //меняем массив <></> на массив <StarIcon/>
    const updatedArray = ratingArray.map((item: JSX.Element, index: number) => {
      return (
        <StarIcon
          className={cn(styles.star, {
            //заливка нужного количества звезд рейтинга
            //добавляем класс если индекс элемента меньше значени переданого рейтинга
            [styles.filled]: index < currentRating
          })}
        />
      );
    });
    //присваиваем в state новое значение
    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((item, index) => (<span key={index}>{item}</span>))}
    </div>
  );
};