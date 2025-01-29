import "../styles/intro.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //Animation for the small caption "Welcome to HomeSync"
    gsap.to(".intro-caption div", {
      scrollTrigger: {
        trigger: ".intro-caption",
        toggleActions: "restart none none none",
      },
      opacity: 1,
      stagger: 0.3,
      duration: 1,
    });

    //Animation for the Large caption
    gsap.to(".perspective-intro", {
      scrollTrigger: {
        trigger: ".perspective-intro",
        toggleActions: "restart none none none",
      },
      rotateY: 0,
      rotateX: 0,
      duration: 2,
    });
  }, []);

  return (
    <section>
      <div className="intro-heading">
        <div className="intro-caption">
          <div>
            <p>Welcome</p>
          </div>
          <div>
            <p>to</p>
          </div>
          <div>
            <p>HomeSync</p>
          </div>
        </div>
        <div className="intro-text">
          <div className="perspective-intro">
            <span className="line">
              <span className="word">Discover</span>
              <span className="word">the</span>
              <span className="word">Power</span>
            </span>
            <span className="line">
              <span className="word">of</span>
              <span className="word">Connectivity</span>
              <span className="word">in</span>
              <span className="word">your</span>
              <span className="word">house</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
