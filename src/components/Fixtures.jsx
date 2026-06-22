import { fixtures } from "../Data/fixtures";
import { players } from "../Data/players";
import { motion } from "framer-motion";

const Fixtures = () => {
  const getPlayer = (name) =>
    players.find((player) => player.name === name) || { 
      name: name || "Unknown Player", 
      image: "https://via.placeholder.com/100" 
    };

  const groupedFixtures = fixtures.reduce((acc, fixture) => {
    if (!acc[fixture.day]) {
      acc[fixture.day] = [];
    }
    acc[fixture.day].push(fixture);
    return acc;
  }, {});

  return (
    <section id="fixtures" className="fixtures-section">
      <h2>⚔️ Match Week One</h2>

      {Object.entries(groupedFixtures).map(([day, matches]) => (
        <div key={day} className="fixture-day">
          <h3 className="fixture-day-title">{day}</h3>

          <div className="fixtures-grid">
            {matches.map((match, index) => {
              const player1 = getPlayer(match.player1);
              const player2 = getPlayer(match.player2);
              
              // Fallback to UPCOMING if status is blank or missing
              const statusText = match.status || "UPCOMING"; 

              return (
                <motion.div
                  key={match.id || index}
                  className="fixture-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="fixture-player">
                    <img src={player1.image} alt={player1.name} />
                    <h3>{player1.name}</h3>
                  </div>

                  <div className="fixture-vs">
                    <span>VS</span>
                    <small>⚔️ Battle</small>
                  </div>

                  <div className="fixture-player">
                    <img src={player2.image} alt={player2.name} />
                    <h3>{player2.name}</h3>
                  </div>

                  {/* Cleaned status badge layout */}
                  <div className={`fixture-status status-${statusText.toLowerCase().replace(/\s+/g, '-')}`}>
                    {statusText}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Fixtures;