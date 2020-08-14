import React from 'react';
import style from '@styles/index/styles.module.scss';
import NavBar from '@components/NavBar';
import links from '@public/links.json';

const Index: React.FC = () => {
  return (
    <div>
      <NavBar title="Jian-Kai" links={links.links} />
      <h1 className={style.title}>Wellcome to My Profile Site 123</h1>
    </div>
  );
};

export default Index;
