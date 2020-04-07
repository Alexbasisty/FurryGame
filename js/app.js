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