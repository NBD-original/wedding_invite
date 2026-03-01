export const stagger = (delayChildren = 0.08) => ({
    hidden: {},
    show: {
      transition: { staggerChildren: delayChildren },
    },
  });
  