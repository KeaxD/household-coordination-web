import { useGSAP } from "@gsap/react";
import "../styles/contact.css";
import flickerAnimation from "../helpers/flickerAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    //Separation of each letter in the text under the frame
    const contactText = document.querySelectorAll(".contact-text");

    contactText.forEach((word) => {
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

      ScrollTrigger.create({
        trigger: ".text",
        start: "top 40%",
        onEnter: () => flickerAnimation(".contact-text span", 1),
        onLeave: () => flickerAnimation(".contact-text span", 0),
        onEnterBack: () => flickerAnimation(".contact-text span", 1),
        onLeaveBack: () => flickerAnimation(".contact-text span", 0),
      });
    });
  });

  return (
    <section id="contact">
      <div className="contact-card">
        <div>
          <div className="text">
            <h1>Got Questions? </h1>
            <h1 className="contact-text">Or Just Tired of Household Chaos?</h1>
            <h5 className="contact-text">
              Reach out—we can’t do your chores, but we can help you organize
              them!
            </h5>
          </div>
          <div className="btn-container">
            <a href="mailto:keanuph@gmail.com" className="contact-btn">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
