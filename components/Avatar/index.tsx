import React from 'react';
import style from './style.module.scss';
import cx from 'classnames';

interface I_Avatar {
  img: string;
  alt?: string;
  size?: number;
  rect?: boolean;
}

const Index: React.FC<I_Avatar> = (props) => {
  const { img, alt = 'Avatar', size = 40, rect } = props;

  return (
    <div className={cx(style.Avatar, { [style.rect]: rect })} style={{ width: `${size}px`, height: `${size}px` }}>
      <img src={img} alt={alt} />
    </div>
  );
};

export default Index;
