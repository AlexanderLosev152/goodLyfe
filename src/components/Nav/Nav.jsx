import { useEffect, useState } from "react";

import styles from "./Nav.module.scss";

const Nav = () => {
  const [stycky, setStycky] = useState(false);
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const menuLinks = [
    { name: "Classess", link: "#classess" },
    { name: "Timetable", link: "#timetable" },
    { name: "Clubs", link: "#clubs" },
    { name: "Nutrition", link: "#nutrition" },
    { name: "Free Trial", link: "#freeTrial" },
  ];

  const handleClick = () => {
    setIsActive(true);
  };

  // появление класса при скролле
  useEffect(() => {
    window,
      addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        window.scrollY > 0 ? setStycky(true) : setStycky(false);
      });
  });
  return (
    <>
      <nav
        className={`${styles.nav} ${stycky ? "styckyActive" : ""} ${
          open ? styles.open : " "
        }`}
      >
        <ul>
          {menuLinks?.map((menu, i) => (
            <li key={i}>
              <a
                href={menu?.link}
                onClick={handleClick}
                className={isActive ? "active" : ""}
              >
                {menu?.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={`${styles.button} ${open ? styles.open : " "}`}
        onClick={() => setOpen(!open)}
      >
        btn
      </button>
    </>
  );
};
export default Nav;
