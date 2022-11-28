window.addEventListener('load', function(){
    // canvas setup
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;

    class InputHandler {

    }
    class Projectile {

    }
    class Particle {

    }
    class Player {
        constructor(game){
            this.game = game;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 100;
            this.speedy = 0;
        }
        update(){
            this.y += this.speedy;
        }
        draw(context){

        }

    }
    class Enemy {

    }
    class Layer {

    }
    class Background {

    }
    class UI {

    }
    class Game {

    }
});