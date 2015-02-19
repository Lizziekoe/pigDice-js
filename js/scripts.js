var CurrentTurn = {currentRun: 0, lastRoll: 1};
CurrentTurn.roll = function(){
  this.lastRoll = Math.ceil(6*Math.random());
};

CurrentTurn.rollEqualsOne = function(){
  return (this.lastRoll === 1)
};

CurrentTurn.addToRun = function(){
  this.currentRun += this.lastRoll
};
