class Index{
    constructor(){
      
    }
    start(){
        this.game= new Game();
        this.game.start();
        }
            
         getKeyAndMove(event) {
            // var key_code = e.which || e.keyCode;
           
             
             if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
                this.game.player.directionX = -5
              } else if (event.code === 'KeyD' || event.code === 'ArrowRight') {
                this.game.player.directionX = 5
              }
              if (event.code === 'KeyW') {
                this.game.player.directionY = -5
              } else if (event.code === 'KeyS') {
                this.game.player.directionY = 5
              }
         }
         getKeyUpMove(event) {
            if (
                event.code === 'KeyA' ||
                event.code === 'KeyD' ||
                event.code === 'ArrowLeft' ||
                event.code === 'ArrowRight'
              ) {
                this.game.player.directionX = 0
              }
              if (event.code === 'KeyW' || event.code === 'KeyS') {
                this.game.player.directionY = 0
              }
        }
        
        }
       var index= new Index();
    
    