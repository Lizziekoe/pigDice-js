describe('CurrentTurn', function() {
  // describe('roll', function() {
  //   it('sets .roll to a random number 1-6', function () {
  //     var player1turn = Object.create(CurrentTurn);
  //     player1turn.roll();
  //     var possible = [1,2,3,4,5,6];
  //     expect(player1turn.lastRoll).to.eql(1 || 2 || 3 || 4 || 5 || 6);
  //   });
  // });
  describe("rollEqualsOne", function(){
    it("returns true for a roll of 1", function(){
      var player1turn = Object.create(CurrentTurn);
      player1turn.lastRoll = 1;
      expect(player1turn.rollEqualsOne()).to.equal(true);
    });
  });
  describe('addToRun', function(){
    it('adds lastRoll to currentRun', function(){
      var dog = Object.create(CurrentTurn);
      dog.currentRun = 13;
      dog.lastRoll = 5;
      dog.addToRun();
      expect(dog.currentRun).to.equal(18);
    });
  });
});
