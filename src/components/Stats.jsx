import { players } from "../Data/players";
import { results } from "../Data/results";
import { calculateStandings } from "../utils/calculateStandings";
import { FaUsers, FaFutbol, FaTrophy, FaFire } from "react-icons/fa";

const Stats = () => {
  const standings = calculateStandings(players, results);

  const leader = standings[0];

  const totalGoals = results.reduce(
    (acc, match) => acc + match.score1 + match.score2,
    0
  );

  return (
    <section className="stats-section">
      <h2>📈 Tournament Stats</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3>{players.length}</h3>
          <p>Players</p>
        </div>

        <div className="stat-card">
          <FaFutbol className="stat-icon" />
          <h3>{results.length}</h3>
          <p>Matches Played</p>
        </div>

        <div className="stat-card">
          <FaFire className="stat-icon" />
          <h3>{totalGoals}</h3>
          <p>Goals Scored</p>
        </div>

        <div className="stat-card">
          <FaTrophy className="stat-icon" />
          <h3>{leader.name}</h3>
          <p>Current King</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;