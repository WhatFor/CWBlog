import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="bg-indigo-400 h-2 fixed top-0 left-0 right-0 transform-origin-0"
            style={{ scaleX }}
            />
    )
};

export default ProgressBar;