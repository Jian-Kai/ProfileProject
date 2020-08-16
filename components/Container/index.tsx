import React from 'react';
import style from './style.module.scss';

interface I_Container {
  title?: string;
}

const Index: React.FC<I_Container> = (props) => {
  const { title, children } = props;
  return (
    <div className={style.Contianer}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Index;
