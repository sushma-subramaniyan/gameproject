 class Game { 
    constructor(imageName){
        this.gameScreen=document.getElementById('game-screen');
        this.container= document.getElementById('container1');
        this.gameEndScreen = document.getElementById('game-end');
       // this.gameStartPage = document.getElementById('gameStartPage');
        this.gameOver=false;
        this.score=0;
        this.highscore=0;
        this.lives=3;
        this.obstacles=[];
        this.strength=[];
        this.animateId=0;
        this.player = new Player(this.gameScreen, 200, 500, 180, 200, imageName);
        this.height = 865
        this.width = 1700
        this.name='';

      
    }
     

     start(playername) {
       this.container.style.display = "none";
       this.gameScreen.style.display = "block";
       this.gameEndScreen.style.display = "none";
       this.gameScreen.style.height = `${this.height}px`
       this.gameScreen.style.width = `${this.width}px`
       document.getElementById('playername').innerHTML= playername;
       this.name=playername;
       this.gameLoop()
     }
        gameLoop(){
            this.update()
            if(this.animateId % 25===0){
                this.obstacles.push(
                    new Obstacle(
                      this.gameScreen,
                      Math.random() * (this.gameScreen.clientWidth) + 50, -20, 80,  40,'fireball.png')
                  )
            }
            if(this.animateId % 100===0){
              this.strength.push(
                  new Obstacle(
                    this.gameScreen,
                    Math.random() * (this.gameScreen.clientWidth) + 20, -20, 70,  60,'snitch1.png')
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
            alert("Game Over and Score is "+ this.score);

            this.highscore = this.getCookie("highscore");

             if(this.highscore===''){
              document.cookie="gameend=end&name="+this.name+"&highscore="+this.score;
             }
             else if(this.highscore<this.score){
              document.cookie="gameend=end&name="+this.name+"&highscore="+this.score;
             }else{
              document.cookie="gameend=end&name="+this.getCookie("name")+"&highscore="+this.highscore;
             }
            location.replace("game.html");

          } else {
            this.animateId = requestAnimationFrame(() => this.gameLoop())
          }
        }

        update() {
            this.player.move()
            const nextObstacles = [];
            const nextStrength= [];
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

            this.strength.forEach(strength => {
              strength.move()
              if (this.player.didCollide(strength)) {
               this.score += 5
               strength.element.remove()
              } else {
                nextStrength.push(strength)
              }

            })
            this.strength = nextStrength
            this.obstacles = nextObstacles

          }
          getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split('&');
            for(let i = 0; i < ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }
         
    }
  