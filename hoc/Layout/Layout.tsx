import React, {FunctionComponent} from 'react';
import {LayoutProps} from './Layout.props';
import {Header} from './Header/Header';
import {Sidebar} from './Sidebar/Sidebar';
import {Footer} from './Footer/Footer';
import styles from './Layout.module.css';

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}/>
      <Sidebar className={styles.sidebar}/>
      <div className={styles.main}>
        {children}
      </div>
      <Footer className={styles.footer}/>
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