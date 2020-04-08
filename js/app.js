console.log('hello');

class Furry {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
  }
}

class Coin {
  constructor() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
  }
}

class Game {
  constructor() {
    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry;
    this.coin = new Coin;
    this.score = 0;
  }

  index = (x, y) => {
    return x + (y * 10)
  };

  hideVisibleFurry = () => {
    document.querySelector('.furry').classList.remove('furry');
  }

  showFurry = () => {
    this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
  };

  showCoin = () => {
    this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
  }

  startGame = () => {
    this.idSetinterval = setInterval(() => {
      if (this.furry.direction === "right") {
        this.furry.x = this.furry.x + 1;
      } else if (this.furry.direction === "left") {
        this.furry.x = this.furry.x - 1;
      } else if (this.furry.direction === "down") {
        this.furry.y = this.furry.y + 1;
      } else if (this.furry.direction === "top") {
        this.furry.y = this.furry.y - 1;
      }
      this.gameOver()
      this.hideVisibleFurry()
      this.showFurry()
      this.checkCoinCollision()

    }, 350)
  }

  turnFurry = event => {
    switch (event.which) {
      case 37:
        this.furry.direction = 'left';
        break;
      case 39:
        this.furry.direction = 'right';
        break;
      case 38:
        this.furry.direction = 'top';
        break;
      case 40:
        this.furry.direction = 'down';
        break;
    }
  }

  checkCoinCollision = () => {
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
      document.querySelector('.coin').classList.remove('coin');
      this.score = this.score + 1;
      document.querySelector('#score strong').innerText = this.score
      this.coin = new Coin;
      this.showCoin()
    }
  }

  gameOver = () => {
    if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
      clearInterval(this.idSetinterval);
      this.hideVisibleFurry();
      document.querySelector('h1').innerText = "Game Over"
      return false;
    }
  }
}

let startGame = new Game;
startGame.showFurry();
startGame.showCoin();
startGame.startGame();

document.addEventListener('keydown', function(event){
  startGame.turnFurry(event);
});
