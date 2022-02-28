import {ReactNode} from 'react';

//шаблон принимаемых пропсов
export interface HtagProps {
  tag: 'h1' | 'h2' | 'h3',
  children: ReactNode
}