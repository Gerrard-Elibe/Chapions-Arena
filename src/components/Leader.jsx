import { FaCrown } from "react-icons/fa";
import { players } from "../Data/players";
import { results } from "../Data/results";
import { calculateStandings } from "../utils/calculateStandings";

const Leader = () => {
  const standings = calculateStandings(players, results);

  const leader = standings[0];

  return (
    <section className="leader-section">
      <h2>👑 Current King</h2>

      <div className="leader-card">
        <FaCrown className="crown" />

        <img
          src={leader.image}
          alt={leader.name}
        />

        <h3>{leader.name}</h3>

        <p>🎮 {leader.tag}</p>

        <div className="leader-stats">
          <span>🏆 {leader.points} PTS</span>
          <span>⚽ GD: {leader.gd}</span>
          <span>🔥 {leader.won} Wins</span>
        </div>
      </div>
    </section>
  );
};

export default Leader;