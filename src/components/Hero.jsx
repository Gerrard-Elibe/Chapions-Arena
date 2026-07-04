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
        {/* Trophy */}
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

        {/* Badge */}
        <motion.div
          className="hero-badge"
          variants={itemVariants}
        >
          ⚽ Champions Arena • Season One
        </motion.div>

        {/* Title */}
        <motion.h1 variants={titleVariants}>
          CHAMPIONS
          <span> ARENA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h3 variants={itemVariants}>
          MATCHWEEK 2 • LEAGUE IN PROGRESS
        </motion.h3>

        {/* Description */}
        <motion.p variants={itemVariants}>
          The race for the title has begun.
          <br />
          12 Players • Double Round Robin League
          <br />
          Every Match Counts.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          variants={itemVariants}
        >
          <div className="hero-stat">
            <h2>12</h2>
            <span>Players</span>
          </div>

          <div className="hero-stat">
            <h2>22</h2>
            <span>Matchweeks</span>
          </div>

          <div className="hero-stat">
            <h2>132</h2>
            <span>Total Matches</span>
          </div>

          <div className="hero-stat">
            <h2>2</h2>
            <span>Current Week</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          style={{ display: "inline-block" }}
        >
          <motion.a
            href="#fixtures"
            className="hero-btn"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(0,168,255,.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW MATCHWEEK 2 ⚽
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