import { results } from "../Data/results";
import { motion } from "framer-motion";

const Results = () => {
  return (
    <section id="results" className="results-section">
      <h2>📊 Matchday One Results</h2>

      <div className="results-grid">
        {results.map((match, index) => (
          <motion.div
            key={match.id}
            className="result-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div className="result-status">
              {match.status}
            </div>

            {match.score1 !== null ? (
              <h3>
                <span>{match.player1}</span>

                <span className="score">
                  {match.score1} - {match.score2}
                </span>

                <span>{match.player2}</span>
              </h3>
            ) : (
              <>
                <h3>
                  {match.player1}
                  <span className="score">vs</span>
                  {match.player2}
                </h3>

                <p className="walkover-text">
                  Match not played. Walkover awarded.
                </p>
              </>
            )}

            <small>{match.day}</small>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Results;