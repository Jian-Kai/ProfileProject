import React from 'react';
import style from './style.module.scss';

interface I_Banner {
  backImg: string;
  mainTitle: string;
  subTitle?: string;
}

const Index: React.FC<I_Banner> = (props) => {
  const { backImg, mainTitle, subTitle } = props;

  React.useEffect(() => {
    console.log(backImg);
  }, []);
  return (
    <header className={style.Banner} style={{ backgroundImage: `url(${backImg})` }}>
      <div className={style.Overlay}></div>
      <div className={style.Container}>
        <h1 className="F80">{mainTitle}</h1>
        <span className="F20">{subTitle}</span>
      </div>
    </header>
  );
};

export default Index;
