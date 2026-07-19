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

  // Loop through every matchday
  Object.values(results).forEach((matchday) => {
    // Loop through every match in that matchday
    matchday.forEach(([player1, player2, score1, score2]) => {
      const p1 = table.find((player) => player.name === player1);
      const p2 = table.find((player) => player.name === player2);

      if (!p1 || !p2) return;

      p1.played++;
      p2.played++;

      p1.gf += score1;
      p1.ga += score2;

      p2.gf += score2;
      p2.ga += score1;

      if (score1 > score2) {
        p1.won++;
        p2.lost++;
        p1.points += 3;
      } else if (score2 > score1) {
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
  });

  table.forEach((player) => {
    player.gd = player.gf - player.ga;
  });

  return table.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;

    if (b.gd !== a.gd) return b.gd - a.gd;

    if (b.gf !== a.gf) return b.gf - a.gf;

    return a.ga - b.ga;
  });
};