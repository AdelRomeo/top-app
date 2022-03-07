import React from 'react';
import {Htag, Rating, Tag} from '../components';
import {Button} from '../components';
import {Description} from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>
      <Button appearance='primary' arrow='right'>Кнопка primary</Button>
      <Button appearance='ghost' arrow='right'>Кнопка primary</Button>
      <Description size='small'>
        Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills —
        навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками
        и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
      </Description>
      <Description>
        Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills —
        навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками
        и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
      </Description>
      <Description size='big'>
        Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills —
        навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками
        и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
      </Description>
      <Tag color='red'>Red</Tag>
      <Tag color='primary' href='link/link'>Primary</Tag>
      <Tag color='ghost' size='normal'>Primary</Tag>
      <Tag color='gray' size='small'>Gray</Tag>
      <Tag color='green'>Green</Tag>
      <Rating rating={2}/>
    </>
  );
}
