const team = {
    _players: [{
      firstName: 'Joe',
      lastName: 'Magic',
      age: 16
    },
    {
      firstName: 'Andy',
      lastName: 'Random',
      age: 17
    },
    {
      firstName: 'George',
      lastName: 'Wow',
      age: 15
    }],
    _games: [{
      opponent: 'Horses',
      teamPoints: 11,
      opponentPoints: 12
    },
    {
      opponent: 'Snakes',
      teamPoints: 20,
      opponentPoints: 2
    }, 
    {
      opponent: 'Herons',
      teamPoints: 15,
      opponentPoints: 21
    }],
    get games() {
      return this._games;
    },
    get players() {
      return this._players;
    },
    addPlayer (firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age
      };
      this._players.push(player);
    },
    addGame (opponent, teamPoints, opponentPoints) {
      let game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  console.log()
  
  team.addGame('Hawks', 11, 16);
  team.addGame('Ants', 15, 15);
  team.addGame('Sharks', 25, 8);
  
  console.log(team.games);