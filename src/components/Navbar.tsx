import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

export const smoother = {
  paused: (_state: boolean) => {},
  scrollTop: (_value: number) => window.scrollTo({ top: 0 }),
  scrollTo: (section: string | null) => {
    if (!section) return;
    document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
  },
};

const Navbar = () => {
  useEffect(() => {
    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    const handleLinkClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const elem = e.currentTarget as HTMLAnchorElement;
        const section = elem.getAttribute("data-href");
        smoother.scrollTo(section);
      }
    };

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", handleLinkClick);
    });

    const handleResize = () => {
      ScrollTrigger.refresh(true);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      links.forEach((elem) => {
        const element = elem as HTMLAnchorElement;
        element.removeEventListener("click", handleLinkClick);
      });
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Shahzaib
        </a>
        <a
          href="mailto:shahzaib.dev.placeholder@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          shahzaib.dev.placeholder@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
