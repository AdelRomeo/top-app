import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

//DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> позволяет обращаться к кастомному элементу как к обычной кнопки
//onClick в подсказках
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode,
  appearance: 'primary' | 'ghost',
  arrow?: 'right' | 'down' | 'none'
}