console.log('hello');

const Furry = () => {
  this.x = 0;
  this.y = 0;
  this.direction = "right";
};

const Coin = () => {
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
};

const Game = () => {
    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
};