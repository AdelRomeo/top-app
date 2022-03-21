import React, {useState} from 'react';
import {Htag, Rating, Tag} from '../components';
import {Button} from '../components';
import {Description} from '../components';
import {withLayout} from '../hoc/Layout/Layout';
import {GetStaticProps} from 'next';
import axios from 'axios';
import {MenuItem} from '../interfaces/menu.interface';

function Home({menu}: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(3);

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
      <Rating rating={rating} setRating={setRating} isEditable={true}/>
      <Rating rating={4} isEditable={false}/>
      <ul>
        {menu.map(item => (<li key={item._id.secondCategory}>{item._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  //первая категория загружаемая по умолчанию
  const firstCategory = 0;
  //ответ сервера со списком категорий
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

//шаблон для пропсов
interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number
}