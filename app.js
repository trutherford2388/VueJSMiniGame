new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    attackLog: []
  },
  methods: {
    newGame: function() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.attackLog = [];
      this.gameIsRunning = true;
    },
    attack: function() {},
    specialAttack: function() {},
    heal: function() {},
    giveUp: function() {},
    monsterAttack: function() {},
    generaterNumber: function(lowestNumberInRange, highestNumberInRange) {}
  }
});
