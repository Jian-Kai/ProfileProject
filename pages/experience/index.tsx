import React from 'react';
import Haed from 'next/head';
import style from '@styles/index/style.module.scss';
import NavBar from '@components/NavBar';
import Banner from '@components/Banner';
import Container from '@components/Container';
import bannerImg from '@public/experience-banner.jpg';
import links from '@public/links.json';

const Index: React.FC = () => {
  return (
    <React.Fragment>
      <Haed>
        <title>My Experience</title>
      </Haed>
      <NavBar title="Jian-Kai" links={links.links} />
      <Banner backImg={bannerImg} mainTitle="My Experience" subTitle="Fontend Engineer" />
      <Container>
        <h1 className={style.title}>Wellcome to My Profile Site 123456</h1>
      </Container>
    </React.Fragment>
  );
};

export default Index;
