import React from 'react';
import { ReactTinyLink } from 'react-tiny-link';

import logo from '../../logo.svg';
import { APPS } from '../../constants';

import style from './index.module.css';

const apps = Object.values(APPS).map(({ name, url, description }) => (
  <div className={style.card}>
    <ReactTinyLink
      header={name}
      cardSize="large"
      description={description}
      url={url}
    />
  </div>
));

export const App = () => (
  <div className={style.app}>
    <header className={style.header}>
      <img src={logo} className={style.logo} alt="logo" />
    </header>
    <main className={style.main}>
      {apps}
    </main>
  </div>
);
