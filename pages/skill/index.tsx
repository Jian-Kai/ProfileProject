import React from 'react';
import Haed from 'next/head';
import style from '@styles/skill/style.module.scss';
import NavBar from '@components/NavBar';
import Banner from '@components/Banner';
import Container from '@components/Container';
import bannerImg from '@public/img/skill-banner.jpg';
import links from '@public/json/links.json';
import { skill } from '@public/json/skills.json';

const Index = () => {
  return (
    <React.Fragment>
      <Haed>
        <title>My Skill</title>
      </Haed>
      <NavBar title="Jian-Kai" links={links.links} />
      <Banner backImg={bannerImg} mainTitle="Skill" subTitle="The following are my skills" />
      <Container title="技能樹">
        <div className={style.skills}>
          {skill.map((s, idx) => {
            return (
              <div key={`${s.name}-${idx}`} className={style.skillBlock}>
                <span>{s.name}</span>
                <ul>
                  {s.list.map((l, id) => {
                    return (
                      <li key={`${l.name}-${id}`} className={style.skill}>
                        {l.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Index;
