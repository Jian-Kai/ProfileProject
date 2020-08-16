import React from 'react';
import Haed from 'next/head';
import style from '@styles/index/style.module.scss';
import NavBar from '@components/NavBar';
import Banner from '@components/Banner';
import Container from '@components/Container';
import Avatar from '@components/Avatar';
import Icons from '@components/Icons';
import bannerImg from '@public/home-banner.jpg';
import links from '@public/links.json';
import meImg from '@public/Me.jpg';

const Index: React.FC = () => {
  return (
    <React.Fragment>
      <Haed>
        <title>About Me</title>
      </Haed>
      <NavBar title="Jian-Kai" links={links.links} />
      <Banner backImg={bannerImg} mainTitle="Wellcome" subTitle="My Name is Jian-Kai,Kuo" />
      <Container>
        <section className={style.Brief}>
          <div className={style.Avatar}>
            <Avatar img={meImg} size={240} />
          </div>
          <div className={style.Content}>
            <h2 className="F40">郭建凱</h2>
            <p className={`${style.info} F16`}>大學時期的畢業專題，在網頁上設計了線上點餐系統，對於開發網站萌生了興趣。</p>
            <p className={`${style.info} F16`}>碩士的研究領域為Data Visualization，畢業論文以蒐集Facebook上粉絲專業上的貼文資料，並且在網頁上透過視覺化的呈現方式。</p>
            <p className={`${style.info} F16`}>平時除了會進修自身程式實作的能力外，假日時也會下廚、出外踏青、看電影小說、與朋友聚餐…等等。</p>
            <div className={style.social}>
              <a href="#">
                <Icons name="Facebook" />
              </a>
              <a href="">
                <Icons name="Github" />
              </a>
              <a href="">
                <Icons name="Linkedin" />
              </a>
            </div>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default Index;
