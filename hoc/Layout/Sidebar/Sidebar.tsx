import React from 'react';
import {SidebarProps} from './Sidebar.props';
import styles from './Htag.module.css';

//компонент заголовка
export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
  return (
   <div {...props}>
     Sidebar
   </div>
  );
};