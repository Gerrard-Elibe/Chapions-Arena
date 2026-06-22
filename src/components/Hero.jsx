import { motion } from "framer-motion";

const Hero = () => {
  // Stagger variants to orchestrate smooth, sequential loading transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Smooth automatic cascading delays
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };

  return (
    <section className="hero">
      {/* Decorative Background Glows */}
      <div className="hero-glow hero-glow-1" aria-hidden="true"></div>
      <div className="hero-glow hero-glow-2" aria-hidden="true"></div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Trophy Animation */}
        <motion.div
          className="hero-trophy"
          variants={{
            hidden: { scale: 0, rotate: -180 },
            visible: { scale: 1, rotate: 0, transition: { type: "spring", duration: 1 } }
          }}
        >
          🏆
        </motion.div>

        {/* Badge Indicator */}
        <motion.div className="hero-badge" variants={itemVariants}>
          ⚡ eFootball Tournament 2026
        </motion.div>

        {/* Main Header */}
        <motion.h1 variants={titleVariants}>
          CHAMPIONS<span> ARENA</span>
        </motion.h1>

        {/* Season Indicator */}
        <motion.h3 variants={itemVariants}>
          SEASON ONE
        </motion.h3>

        {/* Informative Subtext */}
        <motion.p variants={itemVariants}>
          14 Competitors • 7 Opening Matches
          <br />
          One Champion. Endless Bragging Rights.
        </motion.p>

        {/* Micro-Stats Display Dashboard */}
        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="hero-stat">
            <h2>14</h2>
            <span>Players</span>
          </div>

          <div className="hero-stat">
            <h2>7</h2>
            <span>Fixtures</span>
          </div>

          <div className="hero-stat">
            <h2>4</h2>
            <span>Match Days</span>
          </div>
        </motion.div>

        {/* Main CTA Button Action */}
        <motion.div variants={itemVariants} style={{ display: 'inline-block' }}>
          <motion.a
            href="#players"
            className="hero-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ENTER ARENA ⚡
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Decorative Downwards Scroll Indicator */}
      <div className="scroll-down" aria-hidden="true">
        ↓
      </div>
    </section>
  );
};

export default Hero;