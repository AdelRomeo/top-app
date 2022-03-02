import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import {HtmlAttributes} from 'csstype';

export interface DescriptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  children: ReactNode,
  size?: 'small' | 'normal' | 'big'
}