export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 160,
      mass: 1,
      damping: 60,
      staggerChildren: 0.4,
    },
  },
};

export const variants = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
