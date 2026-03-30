import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const projects = [
    {
      name: "SwiftCart UI",
      category: "Flutter UI",
      tools: "Flutter, Dart, Responsive Design, UI Components",
    },
    {
      name: "Campus Connect",
      category: "Student App",
      tools: "Flutter, Firebase, Auth Flow, Navigation",
    },
    {
      name: "Task Orbit",
      category: "Productivity App",
      tools: "Flutter, Dart, Local Storage, Clean UI",
    },
    {
      name: "Clinic Desk",
      category: "Dashboard Concept",
      tools: "Flutter, Forms, Data Layouts, UX Structure",
    },
    {
      name: "ShopEase Mobile",
      category: "E-Commerce Concept",
      tools: "Flutter, State Management, Cart Flow, UI Logic",
    },
    {
      name: "Portfolio Mobile",
      category: "Personal Brand App",
      tools: "Flutter, Animation, Responsive UI, Presentation",
    },
  ];

  useEffect(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return;

      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
