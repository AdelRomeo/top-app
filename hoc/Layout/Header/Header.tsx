import React from 'react';
import {HeaderProps} from './Header.props';
import styles from './Header.module.css';

//компонент заголовка
export const Header = ({...props}: HeaderProps): JSX.Element => {
  return (
   <div  {...props}>
     Header
   </div>
  );
};