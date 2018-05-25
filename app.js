new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    randomNumber: 0,
    gameOver: false,
    attackLog: []
  },
  methods: {
    newGame: function() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.attackLog = [];
      this.gameIsRunning = true;
      this.gameOver = false;
    },
    attack: function() {
      this.playerAttack(1, 20);
      this.monsterHealth === 0 ? this.endGame('Player') : this.monsterAttack();
    },
    specialAttack: function() {
      this.playerAttack(10, 30);
      this.monsterHealth === 0 ? this.endGame('Player') : this.monsterAttack();
    },
    playerAttack: function(min, max) {
      this.generateNumber(min, max);
      this.monsterHealthAfterAttack();
      this.createBattleLogEntry('player attacks the monster for', 'player-turn');
    },
    heal: function() {
      this.generateNumber(1, 20);
      this.playerHealth + this.randomNumber > 100 ? this.playerHealth = 100 : this.playerHealth += this.randomNumber;
      this.createBattleLogEntry('player heals for', 'player-turn');
      this.monsterAttack();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    monsterAttack: function() {
      this.generateNumber(1, 20);
      this.playerHealth - this.randomNumber > 0 ? this.playerHealth -= this.randomNumber : this.playerHealth = 0;
      this.createBattleLogEntry('monster hits the player for', 'monster-turn');
      if(this.playerHealth === 0) {
        this.endGame('Monster');
      }
    },
    monsterHealthAfterAttack: function() {
      this.monsterHealth - this.randomNumber > 0 ? this.monsterHealth -= this.randomNumber : this.monsterHealth = 0;
    },
    generateNumber: function(min, max) {
      this.randomNumber = Math.floor(Math.random() * max) + min;
    },
    endGame: function(winner) {
      this.gameOver = true;
      alert(`Game Over!!! The ${winner} is the winner!`)
    },
    createBattleLogEntry: function(attackType, whosTurn) {
      this.attackLog.push({
        type: attackType,
        amount: this.randomNumber,
        turn: whosTurn
      });
    }
  }
});
