import { fixtures } from "../Data/fixtures";
import { players } from "../Data/players";
import { motion } from "framer-motion";

const Fixtures = () => {
  const getPlayer = (name) =>
    players.find((player) => player.name === name);

  const groupedFixtures = fixtures.reduce((acc, fixture) => {
    if (!acc[fixture.matchday]) acc[fixture.matchday] = {};
    if (!acc[fixture.matchday][fixture.day]) {
      acc[fixture.matchday][fixture.day] = [];
    }

    acc[fixture.matchday][fixture.day].push(fixture);
    return acc;
  }, {});

  const dayOrder = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const getStatusClass = (status) => {
    if (status.includes("Completed")) return "completed";
    if (status.includes("Live")) return "live";
    return "upcoming";
  };

  return (
    <section id="fixtures" className="fixtures-section">
      <h2>⚔️ League Fixtures</h2>

      {Object.keys(groupedFixtures)
        .sort((a, b) => Number(a) - Number(b))
        .map((matchday) => (
          <div key={matchday} className="fixture-day">
            <h3 className="fixture-day-title">
              🏆 Matchday {matchday}
            </h3>

            {Object.entries(groupedFixtures[matchday])
              .sort(
                ([a], [b]) =>
                  dayOrder.indexOf(a) - dayOrder.indexOf(b)
              )
              .map(([day, matches]) => (
                <div key={day}>
                  <h4
                    style={{
                      textAlign: "center",
                      color: "#00a8ff",
                      margin: "2rem 0 1rem",
                    }}
                  >
                    📅 {day}
                  </h4>

                  <div className="fixtures-grid">
                    {matches.map((match, index) => {
                      const player1 = getPlayer(match.player1);
                      const player2 = getPlayer(match.player2);

                      if (!player1 || !player2) return null;

                      return (
                        <motion.div
                          key={match.id}
                          className="fixture-card"
                          initial={{ opacity: 0, y: 40 }}
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

                          <div
                            className={`fixture-status ${getStatusClass(
                              match.status
                            )}`}
                          >
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