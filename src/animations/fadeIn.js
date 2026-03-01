export const fadeIn = ({
  y = 14,
  duration = 0.8,
  delay = 0,
} = {}) => ({
  hidden: {
    opacity: 0,
    y,
    transition: { duration: 0.45, ease: [0.2, 0.9, 0.2, 1] },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: [0.2, 0.9, 0.2, 1] },
  },
});
