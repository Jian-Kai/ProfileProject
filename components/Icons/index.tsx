import React from 'react';
import Svgs from './svgs';
import style from './style.module.scss';

interface I_Icons {
  name: string;
  size?: number;
}

const Index: React.FC<I_Icons> = (props) => {
  const { name, size = 50 } = props;
  const Component = Svgs[name];
  return (
    <span className={style.Icon} style={{ fontSize: `${size}px` }}>
      <Component />
    </span>
  );
};

export default Index;
