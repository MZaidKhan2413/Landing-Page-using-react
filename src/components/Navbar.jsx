import "./Navbar.css";
import Button from "./Button";
import Nav_Options from "./Nav_Options";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const navOptions = [
    { text: "home", link: "#" },
    { text: "About us", link: "#" },
    { text: "portfolio", link: "#" },
    { text: "contact us", link: "#" },
  ];

  return (
    <nav className="Navbar">
      <div className="Navbar-inner d-flex justify-content-between align-items-center px-5 py-3">
        <div className="logo">
          <i className="fa-solid fa-code me-2"></i> Z Dev
        </div>

        <div className="navs d-none d-md-flex align-items-center gap-5">
          {navOptions.map((opt, idx) => (
            <Nav_Options key={idx} text={opt.text} link={opt.link} />
          ))}
          <Button text="Get Started" />
        </div>

        <div className="menu-btn d-md-none" onClick={() => setMenu(!menu)}>
          <i className="fa-solid fa-bars-staggered"></i>
        </div>
      </div>

      <div
        className={menu ? "drop-menu drop-menu-open d-md-none" : "drop-menu"}
      >
        <div className="drop-menu-inner">
          <div className="px-5 py-3">
            {navOptions.map((opt, idx) => (
              <Nav_Options key={idx} text={opt.text} link={opt.link} />
            ))}
            <Button text="Get Started" />
          </div>
        </div>
      </div>
    </nav>
  );
}
