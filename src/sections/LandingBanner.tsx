import gsap from "gsap";
import "../styles/landingBanner.css";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const LandingBanner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".banner-text h1",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );

    gsap.fromTo(
      ".banner-text h2",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 1.25 }
    );

    gsap.to(".banner-img", {
      scrollTrigger: {
        trigger: ".banner-img",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
      scale: 1.2,
    });
  }, []);

  return (
    <section>
      <div className="banner">
        <div className="banner-img"></div>
        <div className="banner-text">
          <h1>HomeSync</h1>
          <h2>A household coordination must</h2>
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
