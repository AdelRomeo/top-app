import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface DescriptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  children: ReactNode,
  size?: 'small' | 'normal' | 'big'
}