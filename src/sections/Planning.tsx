import "../styles/planning.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Planning = () => {
  const maskRef = useRef<HTMLDivElement | null>(null);

  // Function to dynamically calculate scale of the maskbased on screen width
  const calculateScale = () => {
    const screenWidth = window.innerWidth;
    const baseWidth = 800; // Example base width for scaling (e.g., for larger screens)
    const minScale = 1; // Minimum scale (e.g., at smaller widths)
    const maxScale = 1.5; // Maximum scale (e.g., at larger widths)

    // Calculate scale: the scale will increase linearly between minScale and maxScale
    return Math.min(Math.max(minScale, screenWidth / baseWidth), maxScale);
  };

  useEffect(() => {
    //Clip path function based on the mouse position
    const mask = maskRef.current;

    const updateClipPath = (e: MouseEvent) => {
      if (!mask) return;

      // Calculate scale dynamically
      const scale = calculateScale();

      // Get bounding rectangle to calculate mouse position relative to the element
      const { left, top, width, height } = mask.getBoundingClientRect();
      const mouseX = (e.clientX - left) / width; // Normalize mouse position to percentage (0-1)
      const mouseY = (e.clientY - top) / height;

      // Offset the path coordinates based on mouse position
      const offsetX = mouseX * 30; // Adjust multiplier for stronger or weaker effect
      const offsetY = mouseY * 30; // Same for Y direction
      console.log("SCALE: ", scale);
      const newClipPath = `path("M ${
        window.innerWidth / 2 + (759.586 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (183.47 - 183.47) * scale + offsetY - 270
      } L ${
        window.innerWidth / 2 + (759.586 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (183.47 - 183.47) * scale + offsetY - 270
      } Q ${
        window.innerWidth / 2 + (767.458 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (184.898 - 183.47) * scale + offsetY - 270
      } ${
        window.innerWidth / 2 + (770.722 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (192.202 - 183.47) * scale + offsetY - 270
      } L ${
        window.innerWidth / 2 + (884.09 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (445.839 - 183.47) * scale + offsetY - 270
      } Q ${
        window.innerWidth / 2 + (887.355 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (453.143 - 183.47) * scale + offsetY - 270
      } ${
        window.innerWidth / 2 + (879.394 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (453.937 - 183.47) * scale + offsetY - 270
      } L ${
        window.innerWidth / 2 + (332.119 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (508.574 - 183.47) * scale + offsetY - 270
      } Q ${
        window.innerWidth / 2 + (324.159 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (509.369 - 183.47) * scale + offsetY - 270
      } ${
        window.innerWidth / 2 + (323.353 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (501.409 - 183.47) * scale + offsetY - 270
      } L ${
        window.innerWidth / 2 + (283.179 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (104.844 - 183.47) * scale + offsetY - 270
      } Q ${
        window.innerWidth / 2 + (282.373 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (96.8846 - 183.47) * scale + offsetY - 270
      } ${
        window.innerWidth / 2 + (290.244 - 759.586) * scale + offsetX + 200
      } ${
        window.innerHeight / 2 + (98.3128 - 183.47) * scale + offsetY - 270
      } Z")`;

      // Animate the clip-path using GSAP's `to` method for smooth transitions
      gsap.to(mask, {
        duration: 0.2, // Smoothness of transition
        clipPath: newClipPath,
        ease: "power2.out", // Animation easing
      });
    };

    // Listen for mouse movement to update the clip path
    window.addEventListener("mousemove", updateClipPath);

    // Listen for window resize to update the scale dynamically
    window.addEventListener("resize", () => {
      if (mask) {
        updateClipPath(new MouseEvent("mousemove")); // Trigger mousemove to recalculate the clip path
      }
    });

    // ======= GSAP ANIMATION ======== //

    //Animation for the outer-mask
    gsap.to(".outer-mask", {
      scrollTrigger: {
        trigger: "#planning",
        start: "top bottom",
        toggleActions: "restart none none none",
      },
      rotateY: 0,
      rotateX: 0,
      translateX: 0,
      translateY: 0,
      opacity: 1,
      duration: 1,
    });

    //Animation for the inner-mask
    gsap.to(".inner-mask", {
      scrollTrigger: {
        trigger: "#planning",
        start: "top bottom",
        toggleActions: "restart none none none",
      },
      rotateY: 0,
      rotateX: 0,
      translateX: 0,
      translateY: 0,
      opacity: 1,
      duration: 1,
    });

    //Background color change
    gsap.fromTo(
      "#planning",
      { backgroundColor: "white" }, // Initial state
      {
        scrollTrigger: {
          trigger: "#planning",
          start: "10px top",
          end: "bottom top",
          onEnter: () => {
            gsap.to("#planning", { backgroundColor: "#99ef64", duration: 0 });
          },
          onLeaveBack: () => {
            gsap.to("#planning", { backgroundColor: "white", duration: 0 });
          },
        },
      }
    );

    //Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", updateClipPath);
      window.removeEventListener("resize", calculateScale);
    };
  }, []);

  return (
    <section id="planning">
      <div className="outer-mask">
        <h1 className="plan-text">The best way </h1>
        <h1 className="plan-text">to 𝓟𝓵𝓪𝓷</h1>
      </div>
      <div className="mask" ref={maskRef}>
        <div className="inner-mask">
          <h1 className="plan-text">The best way </h1>
          <h1 className="plan-text">to 𝓟𝓵𝓪𝓷</h1>
        </div>
        <img
          src="https://images.pexels.com/photos/8581047/pexels-photo-8581047.jpeg?auto=compress&cs=tinysrgb&w=&h=750&dpr=2"
          alt="planning image"
        />
      </div>
      <div className="planning-desc">
        <p>
          Because ‘Who’s using the washing machine?’ should 𝗡𝗘𝗩𝗘𝗥 be a mystery.
        </p>
      </div>
    </section>
  );
};

export default Planning;
