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

    //Animation for the frame
    gsap.to(".frame-inner", {
      scrollTrigger: {
        trigger: ".frame-inner",
        start: "top top",
        end: `+=${window.innerHeight}`,
        scrub: 1,
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

    //Animation for the image in the frame
    gsap.fromTo(
      ".frame-inner img",
      {
        scale: 0.8, //Scale it from 80%
      },
      {
        scrollTrigger: {
          trigger: ".frame-inner",
          start: "top top",
          end: `+=${window.innerHeight}`,
          scrub: 1,
        },
        scale: 1, //Scale it to 100%
      }
    );

    //Separation of each letter in the text under the frame
    const words = document.querySelectorAll(".frame-text");

    words.forEach((word) => {
      if (!word || word.textContent === null) return;
      const text = word.textContent;
      word.innerHTML = text
        .split(/(\s+)/)
        .map((part) => {
          if (part.trim() === "") {
            return part;
          } else {
            return part
              .split("")
              .map(
                (char) =>
                  `<span style="opacity:0; display:inline-block;">${char}</span>`
              )
              .join("");
          }
        })
        .join("");
    });

    //Animation for the text under the frame
    function flickerAnimation(targets: any, toOpacity: number) {
      gsap.to(targets, {
        opacity: toOpacity,
        duration: 0.03,
        stagger: {
          amount: 0.3,
          from: "random",
        },
      });
    }

    ScrollTrigger.create({
      trigger: ".intro-text",
      start: "top top",
      end: () => `+=${window.innerHeight}`,
      onEnter: () => flickerAnimation(".frame-text span", 1),
      onLeave: () => flickerAnimation(".frame-text span", 0),
      onEnterBack: () => flickerAnimation(".frame-text span", 1),
      onLeaveBack: () => flickerAnimation(".frame-text span", 0),
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
            <p className="frame-text">Connect</p>
          </div>
          <div>
            <p className="frame-text">Control</p>
          </div>
        </div>
        <div className="frame-inner">
          <img
            src="https://images.unsplash.com/photo-1621570168297-bdcdd4457664?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="house-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
