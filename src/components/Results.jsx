import { results } from "../Data/results";
import { motion } from "framer-motion";

const Results = () => {
  const matchdays = Object.keys(results).sort((a, b) => a - b);

  return (
    <section id="results" className="results-section">
      <h2>🏆 Match Results</h2>

      {matchdays.length === 0 ? (
        <motion.div
          className="empty-results"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="empty-icon">⚽</div>

          <h3>No Results Yet</h3>

          <p>
            Season One begins on Thursday.
            <br />
            Match results will appear here after every game.
          </p>
        </motion.div>
      ) : (
        matchdays.map((matchday) => (
          <div key={matchday} className="fixture-day">

            <h3 className="fixture-day-title">
              🏆 Matchday {matchday}
            </h3>

            <div className="results-grid">
              {results[matchday].map((match, index) => {
                const [player1, player2, score1, score2] = match;

                return (
                  <motion.div
                    key={`${matchday}-${index}`}
                    className="result-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="result-status">
                      🏆 Completed
                    </div>

                    <h3>
                      {player1}

                      <span className="score">
                        {score1} - {score2}
                      </span>

                      {player2}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default Results;