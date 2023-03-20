import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setShowBar(window.pageYOffset > 100)
    );
  }, []);

  return (
    showBar && (
      <>
        <motion.div
          key="mini-nav"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="d-fixed fixed top-0 left-0 right-0 h-2 bg-slate-700 lg:hidden"
        ></motion.div>
        <motion.div
          id="progress-bar"
          className="transform-origin-0 fixed top-0 left-0 right-0 z-50 h-2"
          style={{ scaleX }}
        />
      </>
    )
  );
};

export default ProgressBar;
