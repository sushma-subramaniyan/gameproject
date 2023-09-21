class Home{
    constructor(){
      this.gameend = this.getCookie("gameend");
      if (this.gameend != "") {
        document.getElementById("game-intro").style.display = "none";
        document.getElementById("gameend").style.display = "block";
        this.name = this.getCookie("name");
        this.highscore = this.getCookie("highscore");
        document.getElementById("highscore").innerHTML =this.highscore;
        document.getElementById("prname").innerHTML = this.name;

        document.cookie="gameend=&highscore="+this.highscore+"&name="+this.name;  
        
      
      }else{
        document.getElementById("gameend").style.display = "none";
        document.getElementById("game-intro").style.display = "block";

      
      }
    }
    
      redirect() {
         /* location.replace("game.html");*/
         document.getElementById("page2").style.display ="block";
         document.getElementById('page1').style.display ="none";
        }
         setCookie(cname, cvalue, exdays) {
          const d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          let expires = "expires="+d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        };
        
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
       var home= new Home();
    
    