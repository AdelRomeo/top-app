import React from 'react';
import {ButtonProps} from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
import styles from './Button.module.css';

//компонент заголовка
export const Button = ({children, appearance, arrow = 'none', className, ...props}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, { //соединение классов
        [styles.primary]: appearance == 'primary', //если appearance == 'primary' то добавляется класс styles.primary
        [styles.ghost]: appearance == 'ghost' //если appearance == 'ghost' то добавляется класс styles.ghost
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && <span className={cn(styles.arrow, {
        [styles.down]: arrow == 'down'
      })}>
        <ArrowIcon/>
      </span>}
    </button>
  );
};