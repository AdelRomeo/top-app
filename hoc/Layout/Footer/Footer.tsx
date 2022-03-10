import React from 'react';
import {FooterProps} from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames'

//компонент заголовка
export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
  return (
   <div className={cn(className, styles.footer)} {...props}>
     <span>OwlTop © 2020 - 2021 Все права защищены</span>
     <span>Пользовательское соглашение</span>
     <span>Политика конфиденциальности</span>
   </div>
  );
};