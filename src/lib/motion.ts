export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOutExpo, delay },
  },
});

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeOutExpo, delay },
  },
});

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const hoverLift = {
  whileHover: { y: -4, scale: 1.01, transition: { duration: 0.25 } },
  whileTap: { scale: 0.995 },
};
