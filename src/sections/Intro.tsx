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
      translateX: 0,
      translateY: 0,
      duration: 1.5,
    });

    gsap.to(".word", {
      scrollTrigger: {
        trigger: ".perspective-intro",
        toggleActions: "restart none none none",
      },
      opacity: 1,
      stagger: {
        from: "random",
        amount: 0.5,
      },
    });

    ScrollTrigger.create({
      trigger: ".frame",
      start: "top top",
      end: () => `+=${window.innerHeight}`,
      pin: ".frame",
      pinSpacing: false,
    });

    // ScrollTrigger.create({
    //   trigger: ".frame",
    //   start: "10% top",
    //   end: () => `+=${window.innerHeight}`,
    //   pin: ".under-text",
    //   pinSpacing: false,
    // });

    //Animation for the frame
    gsap.to(".frame-inner", {
      scrollTrigger: {
        trigger: ".frame-inner",
        start: "top top",
        end: `+=${window.innerHeight}`,
        scrub: 1,
        markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(".frame-inner", {
            clipPath: `polygon(
                  50% ${gsap.utils.interpolate(15, 0, progress)}% ,
                  ${gsap.utils.interpolate(
                    80,
                    100,
                    progress
                  )}% ${gsap.utils.interpolate(40, 0, progress)}% ,
                  ${gsap.utils.interpolate(
                    80,
                    100,
                    progress
                  )}% ${gsap.utils.interpolate(75, 100, progress)}% ,
                  ${gsap.utils.interpolate(
                    20,
                    0,
                    progress
                  )}% ${gsap.utils.interpolate(75, 100, progress)}% ,
                  ${gsap.utils.interpolate(
                    20,
                    0,
                    progress
                  )}% ${gsap.utils.interpolate(40, 0, progress)}%
                )`,
          });
        },
      },
    });

    //Clean up all ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="intro">
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
      <div className="frame">
        <div className="under-text">
          <div>
            <p>Connect</p>
          </div>
          <div>
            <p>Control</p>
          </div>
        </div>
        <div className="frame-inner"></div>
      </div>
    </section>
  );
};

export default Intro;
