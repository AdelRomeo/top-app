import React from 'react';
import {Htag} from '../components';
import {Button} from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>
      <Button appearance='primary' arrow='right'>Кнопка primary</Button>
      <Button appearance='ghost' arrow='right'>Кнопка primary</Button>
    </>
  );
}
