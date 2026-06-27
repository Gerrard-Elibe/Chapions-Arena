import { fixtures } from "../Data/fixtures";
import { players } from "../Data/players";
import { motion } from "framer-motion";

const Fixtures = () => {
  const getPlayer = (name) =>
    players.find((player) => player.name === name);

  // Group fixtures by Matchweek
  const groupedWeeks = fixtures.reduce((acc, fixture) => {
    if (!acc[fixture.week]) {
      acc[fixture.week] = [];
    }

    acc[fixture.week].push(fixture);

    return acc;
  }, {});

  return (
    <section id="fixtures" className="fixtures-section">
      <h2>⚔️ Upcoming Fixtures</h2>

      {Object.entries(groupedWeeks).map(([week, weekFixtures]) => (
        <div key={week} className="fixture-week">
          <h2 className="fixture-week-title">
            Matchweek {week}
          </h2>

          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
            (day) => {
              const dayFixtures = weekFixtures.filter(
                (fixture) => fixture.day === day
              );

              if (!dayFixtures.length) return null;

              return (
                <div key={day} className="fixture-day">
                  <h3 className="fixture-day-title">{day}</h3>

                  <div className="fixtures-grid">
                    {dayFixtures.map((match, index) => {
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
                            <small>⚔ Battle</small>
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
              );
            }
          )}
        </div>
      ))}
    </section>
  );
};

export default Fixtures;