import Link from "next/link";
import { useState } from "react";
import { Nav } from "src/components/Nav/Nav";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu((prev) => !prev);
  };
  const handleNavClose = () => {
    setMenu(false);
  };
  return (
    <header>
      <div>
        <h1>
          <Link href="/"></Link>
        </h1>
        <Nav menu={menu} hendleNavClose={handleNavClose} />
      </div>
    </header>
  );
};
