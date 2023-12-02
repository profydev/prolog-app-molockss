import React from "react";
import style from "../features/footer.module.scss";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const navItems = [
  { title: "Docs", url: "#" },
  { title: "API", url: "#" },
  { title: "Help", url: "#" },
  { title: "Community", url: "#" },
];

const Footer = () => {
  return (
    <footer className={style.footer}>
      <nav aria-label="Footer navigation" className={style.nav}>
        <ul role="list">
          {navItems.map((item) => {
            return (
              <li key={item.title}>
                <a className="title-list" href="#">
                  {" "}
                  {item.title}{" "}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/logo-small.svg" alt="" className={style.logo} />

      <p className={style.version}>Version: {publicRuntimeConfig?.version}</p>
    </footer>
  );
};

export default Footer;
