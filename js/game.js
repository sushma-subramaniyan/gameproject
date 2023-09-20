 class Game { 
    constructor(){
        this.gameScreen=document.getElementById('game-screen');
        this.container= document.getElementById('container1');
        this.gameEndScreen = document.getElementById('game-end');
        this.gameOver=false;
        this.score=0;
        this.lives=3;
        this.obstacles=[];
        this.animateId=0;
        this.player = new Player(this.gameScreen, 230, 550, 180, 200);
        this.height = 805
        this.width = 1083

      
    }

     start() {
       this.container.style.display = "none";
       this.gameScreen.style.display = "block";
       this.gameEndScreen.style.display = "none";
       this.gameScreen.style.height = `${this.height}px`
       this.gameScreen.style.width = `${this.width}px`
       this.gameLoop()
     }
        gameLoop(){
            this.update()
            if(this.animateId % 50===0){
                this.obstacles.push(
                    new Obstacle(
                      this.gameScreen,
                      Math.random() * (this.gameScreen.clientWidth - 40 - 100) + 50,
                      -200,
                      80,
                      40
                    )
                  )
            }
        document.getElementById('score').innerHTML = this.score;
        document.getElementById('lives').innerHTML = this.lives;
        if (this.lives < 1) {
            this.gameOver = true
          }
      
          if (this.gameOver) {
            this.gameScreen.style.display = 'none'
            this.gameEndScreen.style.display = 'block'
            alert("Game Over");
          } else {
            this.animateId = requestAnimationFrame(() => this.gameLoop())
          }
        }

        update() {
           this.player.move()
            console.log(this.obstacles)
            const nextObstacles = []
            this.obstacles.forEach(obstacle => {
              obstacle.move()
              if (this.player.didCollide(obstacle)) {
                this.lives -= 1
                obstacle.element.remove()
              } else if (obstacle.top > this.gameScreen.clientHeight) {
                this.score += 1
                obstacle.element.remove()
              } else {
                nextObstacles.push(obstacle)
              }

            })
            this.obstacles = nextObstacles
          }
    }
  