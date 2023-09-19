class Index{
    constructor(){
       // this.objImage = document.getElementById("brstick");
      //  this.init();
        this.game= new Game();
        this.game.start();
    }
        
         getKeyAndMove(e) {
             var key_code = e.which || e.keyCode;
             switch (key_code) {
                 case 37: //left arrow key
                     this.moveLeft();
                     break;
                 case 38: //Up arrow key
                     this.moveUp();
                     break;
                 case 39: //right arrow key
                     this.moveRight();
                     break;
                 case 40: //down arrow key
                     this.moveDown();
                     break;
             }
         }
          moveLeft() {
            this.game.player.directionX = -1
        }
          moveUp() {
            this.game.player.directionX = 0;
        }
         moveRight() {
            this.game.player.directionX = 1
        }
         
      
        }
       var index= new Index();
    
    