import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="loader">
      <motion.div
        className="loader-content"
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="loader-trophy">
          🏆
        </div>

        <h1>
          Champions
          <span> Arena</span>
        </h1>

        <p>Loading Tournament...</p>

        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;