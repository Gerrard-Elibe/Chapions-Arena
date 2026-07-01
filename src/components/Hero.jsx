import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section className="hero">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hero-trophy"
          variants={{
            hidden: {
              scale: 0,
              rotate: -180,
            },
            visible: {
              scale: 1,
              rotate: 0,
              transition: {
                type: "spring",
                duration: 1,
              },
            },
          }}
        >
          🏆
        </motion.div>

        <motion.div
          className="hero-badge"
          variants={itemVariants}
        >
          ⚡ Champions Arena • Season One
        </motion.div>

        <motion.h1 variants={titleVariants}>
          CHAMPIONS
          <span> ARENA</span>
        </motion.h1>

        <motion.h3 variants={itemVariants}>
          OFFICIAL LEAGUE
        </motion.h3>

        <motion.p variants={itemVariants}>
          12 Competitors • 22 Matchweeks
          <br />
          Every Player Battles Home & Away.
          <br />
          One Champion. Eternal Glory.
        </motion.p>

        <motion.div
          className="hero-stats"
          variants={itemVariants}
        >
          <div className="hero-stat">
            <h2>12</h2>
            <span>Players</span>
          </div>

          <div className="hero-stat">
            <h2>6</h2>
            <span>Matches / Week</span>
          </div>

          <div className="hero-stat">
            <h2>22</h2>
            <span>Matchweeks</span>
          </div>

          <div className="hero-stat">
            <h2>132</h2>
            <span>Total Matches</span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          style={{ display: "inline-block" }}
        >
          <motion.a
            href="#fixtures"
            className="hero-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW FIXTURES ⚽
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="scroll-down">
        ↓
      </div>
    </section>
  );
};

export default Hero;