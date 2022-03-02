import React from 'react';
import styles from './Description.module.css';
import cn from 'classnames';
import {DescriptionProps} from './Description.props';

export const Description = ({children, size = 'normal', className, ...props}: DescriptionProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size == 'small',
        [styles.normal]: size == 'normal',
        [styles.big]: size == 'big'
      })}
      {...props}
    >{children}</p>
  );
};