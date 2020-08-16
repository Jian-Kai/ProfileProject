import React from 'react';
import dayjs from 'dayjs';
import Haed from 'next/head';
import style from '@styles/experience/style.module.scss';
import NavBar from '@components/NavBar';
import Banner from '@components/Banner';
import Container from '@components/Container';
import bannerImg from '@public/img/experience-banner.jpg';
import links from '@public/json/links.json';
import { experience } from '@public/json/experience.json';

interface I_ExpCard {
  data: {
    company: string;
    position: string;
    from: string;
    end?: string;
    desp: string[];
  };
}

const ExpCard: React.FC<I_ExpCard> = (props) => {
  const { data } = props;
  const period = `${dayjs(data.from).format('MMMM - YYYY')} ~ ${data.end ? dayjs(data.end).format('MMMM - YYYY') : 'Present'}`;
  return (
    <section className={style.ExpCard}>
      <div className={`${style.header} F20`}>
        <span className={style.company}>{`${data.company} - ${data.position}`}</span>
        <span className={style.period}>{period}</span>
      </div>
      <div className={style.desp}>
        {data.desp.map((d, idx) => (
          <p key={`${data.company}_desp_${idx}`}>{d}</p>
        ))}
      </div>
    </section>
  );
};

const Index: React.FC = () => {
  return (
    <React.Fragment>
      <Haed>
        <title>My Experience</title>
      </Haed>
      <NavBar title="Jian-Kai" links={links.links} />
      <Banner backImg={bannerImg} mainTitle="My Experience" subTitle="I am a Web Developer" />
      <Container>
        <h1>學經歷</h1>
        {experience.map((exp, idx) => {
          return <ExpCard key={`${idx}_${exp.company}_${exp.position}`} data={exp} />;
        })}
      </Container>
    </React.Fragment>
  );
};

export default Index;
