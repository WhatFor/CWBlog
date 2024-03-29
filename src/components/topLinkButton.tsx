import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const TopLinkButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setShowButton(window.pageYOffset > 300)
    );
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          aria-label="Scroll to top"
          key="scroll-top"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 border border-green-400 bg-off-black p-3 hover:bg-gray-flat"
          onClick={scrollTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgb(74, 222, 128)"
            className="h-7 w-7"
          >
            <path
              fill-rule="evenodd"
              d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z"
              clip-rule="evenodd"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default TopLinkButton;
