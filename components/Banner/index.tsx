import React from 'react';
import style from './style.module.scss';

interface I_Banner {
  backImg: string;
}

const Index: React.FC<I_Banner> = (props) => {
  const { backImg } = props;

  React.useEffect(() => {
    console.log(backImg);
  }, []);
  return (
    <header className={style.Banner} style={{ backgroundImage: `url(${backImg})` }}>
      <div className={style.Overlay}></div>
      <div className={style.Container}></div>
    </header>
  );
};

export default Index;
