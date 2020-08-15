import React from 'react';
import Haed from 'next/head';
import style from '@styles/index/style.module.scss';
import NavBar from '@components/NavBar';
import links from '@public/links.json';

const Index: React.FC = () => {
  return (
    <React.Fragment>
      <Haed>
        <title>About Me</title>
      </Haed>
      <div>
        <NavBar title="Jian-Kai" links={links.links} />
        <h1 className={style.title}>Wellcome to My Profile Site 123456</h1>
      </div>
    </React.Fragment>
  );
};

export default Index;
