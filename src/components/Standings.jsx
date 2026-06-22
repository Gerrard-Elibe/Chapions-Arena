import { players } from "../Data/players";
import { results } from "../Data/results";
import { calculateStandings } from "../utils/calculateStandings";

const Standings = () => {
  const standings = calculateStandings(players, results);

  const topThree = standings.slice(0, 3);

  return (
    <section
      id="standings"
      className="standings-section"
    >
      <h2>🏆 Leaderboard</h2>

      <div className="podium">

        {topThree[1] && (
          <div className="podium-card silver">
            <div className="podium-rank">🥈</div>

            <img
              src={topThree[1].image}
              alt={topThree[1].name}
            />

            <h3>{topThree[1].name}</h3>

            <span>{topThree[1].points} PTS</span>
          </div>
        )}

        {topThree[0] && (
          <div className="podium-card gold">
            <div className="podium-rank">🥇</div>

            <img
              src={topThree[0].image}
              alt={topThree[0].name}
            />

            <h3>{topThree[0].name}</h3>

            <span>{topThree[0].points} PTS</span>
          </div>
        )}

        {topThree[2] && (
          <div className="podium-card bronze">
            <div className="podium-rank">🥉</div>

            <img
              src={topThree[2].image}
              alt={topThree[2].name}
            />

            <h3>{topThree[2].name}</h3>

            <span>{topThree[2].points} PTS</span>
          </div>
        )}

      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GD</th>
              <th>PTS</th>
            </tr>
          </thead>

          <tbody>
            {standings.map((player) => (
              <tr key={player.name}>
                <td className="player-cell">
                  <img
                    src={player.image}
                    alt={player.name}
                  />

                  {player.name}
                </td>

                <td>{player.played}</td>
                <td>{player.won}</td>
                <td>{player.draw}</td>
                <td>{player.lost}</td>
                <td>{player.gd}</td>
                <td>{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Standings;