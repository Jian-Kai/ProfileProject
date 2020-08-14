import React from 'react';
import style from './style.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface I_NavBar {
  title: string;
  links: { text: string; url: string }[];
}

const Index: React.FC<I_NavBar> = (props) => {
  const { title, links } = props;
  const { pathname } = useRouter();

  return (
    <div className={style.NavBar}>
      <h1 className={style.Title}>{title}</h1>
      <div className={style.Bar}>
        {links.map((link, idx) => {
          const active = link.url === pathname ? style.active : '';
          return (
            <Link key={`${link.text}-${idx}`} href={link.url}>
              <a className={active}>{link.text}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
