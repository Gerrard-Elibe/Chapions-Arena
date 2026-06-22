export const calculateStandings = (players, results) => {
  const table = players.map((player) => ({
    name: player.name,
    image: player.image,
    tag: player.tag,
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    points: 0,
  }));

  results.forEach((match) => {
    const p1 = table.find(
      (player) => player.name === match.player1
    );

    const p2 = table.find(
      (player) => player.name === match.player2
    );

    if (!p1 || !p2) return;

    p1.played++;
    p2.played++;

    p1.gf += match.score1;
    p1.ga += match.score2;

    p2.gf += match.score2;
    p2.ga += match.score1;

    if (match.score1 > match.score2) {
      p1.won++;
      p2.lost++;

      p1.points += 3;
    } else if (match.score2 > match.score1) {
      p2.won++;
      p1.lost++;

      p2.points += 3;
    } else {
      p1.draw++;
      p2.draw++;

      p1.points++;
      p2.points++;
    }
  });

  table.forEach((player) => {
    player.gd = player.gf - player.ga;
  });

  return table.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    return b.gd - a.gd;
  });
};