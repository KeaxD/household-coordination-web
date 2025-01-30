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

    gsap.to(".banner-img img", {
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
    <section id="landing-banner">
      <div className="banner">
        <div className="banner-img">
          <img
            src="https://images.unsplash.com/photo-1569428047118-ae9338065103?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner-img"
          />
        </div>
        <div className="banner-text">
          <h1>HomeSync</h1>
          <h2>A household coordination must</h2>
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
