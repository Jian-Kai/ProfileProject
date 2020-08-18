import React from 'react';
import Svgs from './svgs';
import style from './style.module.scss';

interface I_Icons {
  name: string;
  size?: number;
}

const Index: React.FC<I_Icons> = (props) => {
  const { name, size = 5 } = props;
  const Component: ({ size }: { size: number }) => JSX.Element = Svgs[name];
  return (
    <span className={style.Icon}>
      <Component size={size} />
    </span>
  );
};

export default Index;
