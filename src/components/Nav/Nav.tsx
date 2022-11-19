import Link from "next/link";
import { FC } from "react";

const navList: { href: string; pageName: string }[] = [
  { href: "/blog/page/1", pageName: "blog" },
  { href: "/about", pageName: "about" },
  { href: "/contact", pageName: "contact" },
];

export const Nav: FC<{
  hendleNavClose: (e: React.MouseEvent<HTMLInputElement>) => void;
  menu: boolean;
}> = ({ hendleNavClose, menu }) => {
  const OpenStyle = menu ? true : undefined;

  return (
    <ul>
      {navList.map((list) => {
        return (
          <li key={list.pageName}>
            <Link href={list.href} onClick={hendleNavClose}>
              {list.pageName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
