import { results } from "../Data/results";
import { motion } from "framer-motion";

const Results = () => {
  return (
    <section id="results" className="results-section">
      <h2>🏆 Match Results</h2>

      {results.length === 0 ? (
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
        <div className="results-grid">
          {results.map((match, index) => (
            <motion.div
              key={match.id}
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
                🏆 Matchday {match.matchday}
              </div>

              <h3>
                {match.player1}

                <span className="score">
                  {match.score1} - {match.score2}
                </span>

                {match.player2}
              </h3>

              <p
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  color: "#b7c3d0",
                }}
              >
                {match.day}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Results;