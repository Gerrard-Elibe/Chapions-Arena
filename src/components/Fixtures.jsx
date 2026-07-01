import { fixtures } from "../Data/fixtures";
import { players } from "../Data/players";
import { motion } from "framer-motion";

const Fixtures = () => {
  const getPlayer = (name) =>
    players.find((player) => player.name === name);

  const groupedFixtures = fixtures.reduce((acc, fixture) => {
    if (!acc[fixture.matchday]) {
      acc[fixture.matchday] = {};
    }

    if (!acc[fixture.matchday][fixture.day]) {
      acc[fixture.matchday][fixture.day] = [];
    }

    acc[fixture.matchday][fixture.day].push(fixture);

    return acc;
  }, {});

  return (
    <section id="fixtures" className="fixtures-section">
      <h2>⚔️ League Fixtures</h2>

      {Object.entries(groupedFixtures).map(([matchday, days]) => (
        <div key={matchday} className="fixture-day">

          <h3 className="fixture-day-title">
            🏆 Matchday {matchday}
          </h3>

          {Object.entries(days).map(([day, matches]) => (
            <div key={day}>

              <h4
                style={{
                  textAlign: "center",
                  margin: "2rem 0 1rem",
                  color: "#00a8ff",
                }}
              >
                {day}
              </h4>

              <div className="fixtures-grid">
                {matches.map((match, index) => {
                  const player1 = getPlayer(match.player1);
                  const player2 = getPlayer(match.player2);

                  return (
                    <motion.div
                      key={match.id}
                      className="fixture-card"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="fixture-player">
                        <img
                          src={player1.image}
                          alt={player1.name}
                        />
                        <h3>{player1.name}</h3>
                      </div>

                      <div className="fixture-vs">
                        <span>VS</span>
                        <small>⚔️ Battle</small>
                      </div>

                      <div className="fixture-player">
                        <img
                          src={player2.image}
                          alt={player2.name}
                        />
                        <h3>{player2.name}</h3>
                      </div>

                      <div className="fixture-status">
                        {match.status}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Fixtures;