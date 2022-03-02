import {ReactNode} from 'react';

//шаблон принимаемых пропсов
export interface HtagProps {
  children: ReactNode,
  tag: 'h1' | 'h2' | 'h3'
}