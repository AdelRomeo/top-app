import React, {FunctionComponent} from 'react';
import {LayoutProps} from './Layout.props';
import {Header} from './Header/Header';
import {Sidebar} from './Sidebar/Sidebar';
import {Footer} from './Footer/Footer';

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <div>
      <Header/>
      <main>
        <Sidebar/>
        <div>
          {children}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

//компонет высшего порядка
//принимает в себя Component типа функционального компонента
//возвращет из себя функцию
//T - специальный тип для props
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props}/>
      </Layout>
    );
  };
};