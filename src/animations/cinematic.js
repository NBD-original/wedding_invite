export const cinematicScale = ({
  duration = 1.1,
  delay = 0,
} = {}) => ({
  hidden: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(6px)",
    transition: { duration: 0.55, ease: [0.2, 0.9, 0.2, 1] },
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration, delay, ease: [0.2, 0.9, 0.2, 1] },
  },
});
