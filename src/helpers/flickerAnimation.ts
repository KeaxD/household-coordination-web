import gsap from "gsap";

export default function flickerAnimation(targets: any, toOpacity: number) {
  gsap.to(targets, {
    opacity: toOpacity,
    duration: 0.03,
    stagger: {
      amount: 0.3,
      from: "random",
    },
  });
}
