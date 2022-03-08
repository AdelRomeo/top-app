import React, {useEffect, useState, KeyboardEvent} from 'react';
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
        <span
          onClick={() => changeRating(index + 1)}
          onMouseEnter={() => changeVisible(index + 1)}
          onMouseLeave={() => changeVisible(rating)}
          className={cn(styles.star, {
            //заливка нужного количества звезд рейтинга
            //добавляем класс если индекс элемента меньше значени переданого рейтинга
            [styles.filled]: index < currentRating,
            //изменение курсора при наведении если элемент разрешено менять
            [styles.editable]: isEditable
          })}
        >
          <StarIcon
            //tabIndex для перемещение по сайту клавишими
            tabIndex={isEditable ? 0 : -1}
            //нажатие на клавиши
            onKeyDown={(event: KeyboardEvent<SVGElement>) => handleSpace(event, index + 1)}
          />
        </span>
      );
    });
    //присваиваем в state новое значение
    setRatingArray(updatedArray);
  };

  //изменение рейтинга. клик по звездочке
  const changeRating = (index: number) => {
    //если передана функция setRating и элемент можно менять
    if (setRating && isEditable) {
      setRating(index);
    }
  };

  //визуальное изменение. наведение мыши на звездочки
  const changeVisible = (index: number) => {
    //если элемент можно менять
    if (isEditable) {
      constructRating(index);
    }
  };

  //нажатие на Space
  const handleSpace = (event: KeyboardEvent<SVGElement>, index: number) => {
    //если передана функция setRating и клавиша на которую нажали это Space
    if (setRating && event.code === 'Space') {
      setRating(index)
    }
  }

  return (
    <div {...props}>
      {ratingArray.map((item, index) => (<span key={index}>{item}</span>))}
    </div>
  );
};