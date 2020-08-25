import React from 'react';
import Haed from 'next/head';
import style from '@styles/portfolio/style.module.scss';
import NavBar from '@components/NavBar';
import Banner from '@components/Banner';
import Container from '@components/Container';
import links from '@public/json/links.json';
import bannerImg from '@public/img/experience-banner.jpg';
import { works } from '@public/json/portfolio.json';

interface I_Work {
  title: string;
  banner: string;
  desp: string;
  use: string[];
}

const Work: React.FC<I_Work> = (props) => {
  const { title, banner, desp, use } = props;
  return (
    <div className={style.work}>
      <div className={style.overlay}>
        <div className={style.desp}>
          <h2 className={style.title}>{title}</h2>
          <span>{desp}</span>
          <div className={style.skill}>
            <span>技術</span>
            <ul>
              {use.map((u, idx) => (
                <li key={`${title}_${u}_${idx}`}>{u}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <img className={style.mainImg} src={banner} alt={title} />
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <React.Fragment>
      <Haed>
        <title>My Portfolio</title>
      </Haed>
      <NavBar title="Jian-Kai" links={links.links} />
      <Banner backImg={bannerImg} mainTitle="My Portfolio" subTitle="JavaScript/React/NodeJS/Golang/GitHub" />
      <Container title="作品集">
        <section className={style.worksSection}>
          {works.map((w, idx) => {
            return <Work key={`${w.title}_${idx}`} {...w} />;
          })}
        </section>
      </Container>
    </React.Fragment>
  );
};

export default Index;
