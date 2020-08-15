import React from 'react';
import style from '@styles/index/styles.module.scss';
import NavBar from '@components/NavBar';
import Banner from '@components/Banner';
import links from '@public/links.json';
import bannerImg from '@public/home-banner.jpg';

const Index: React.FC = () => {
  return (
    <div>
      <NavBar title="Jian-Kai" links={links.links} />
      <Banner backImg={bannerImg} mainTitle="Wellcome" subTitle="My Name is Jian-Kai,Kuo" />
      <h1 className={style.title}>Wellcome to My Profile Site 123456</h1>
    </div>
  );
};

export default Index;
