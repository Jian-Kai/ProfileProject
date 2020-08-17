import React from 'react';
import style from './style.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface I_NavBar {
  title: string;
  links: { text: string; url: string; as?: string }[];
}
const Index: React.FC<I_NavBar> = (props) => {
  const { title, links } = props;
  const { pathname } = useRouter();

  return (
    <nav className={style.NavBar}>
      <h1 className={`${style.Title} F40`}>{title}</h1>
      <div className={`${style.Bar} F20`}>
        {links.map((link, idx) => {
          const active = link.url === pathname ? style.active : '';
          return (
            <Link key={`${link.text}-${idx}`} href={link.url} as={link.as || link.url}>
              <a className={active}>{link.text}</a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Index;
