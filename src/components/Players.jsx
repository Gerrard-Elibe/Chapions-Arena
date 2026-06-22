import { players } from "../Data/players";
import { motion } from "framer-motion";

const Players = () => {
  return (
    <section id="players" className="players-section">
      <h2>🔥 Elite Competitors</h2>

      <div className="players-grid">
        {players.map((player, index) => (
          <motion.div
            key={player.id}
            className="player-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
            }}
          >
            <div className="player-rank">
              #{index + 1}
            </div>

            <div className="player-image-wrapper">
              <img
                src={player.image}
                alt={player.name}
              />
            </div>

            <h3>{player.name}</h3>

            <div className="gamer-tag">
              🎮 {player.tag}
            </div>

            <div className="season-badge">
              ⭐ Season One
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Players;