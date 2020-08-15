import React from 'react';
import style from './style.module.scss';

const Index: React.FC = (props) => {
  const { children } = props;
  return <div className={style.Contianer}>{children}</div>;
};

export default Index;
