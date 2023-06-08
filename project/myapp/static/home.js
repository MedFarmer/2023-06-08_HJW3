var ballMove = document.getElementById("ball_movement");
var x = 0;
var y = 60;
var height = 600;
var width = 1400;
direction = 'downRight'

function moveBall(){        
    function downRight() {    
        console.log('downRight', x, y)
        direction =''
        x += 1;
        y += 1;
        if(y === height) {
            upRight();
            return          

        }else if(x === width) {
            downLeft()
            return        
        }    
        ballMove.style.left = x + "px";
        ballMove.style.top = y + "px";    
        requestAnimationFrame(downRight);              
    }
    function upRight() {
        console.log('upRight', x, y)
        x += 1;
        y -= 1;
        if(y === 60) {
            downRight();
            return
        }else if(x === width) {
            upLeft();
            return
        }   
        ballMove.style.left = x + "px";
        ballMove.style.top = y + "px";    
        requestAnimationFrame(upRight);              
    }
    function upLeft() {
        console.log('upLeft', x, y)
        x -= 1;
        y -= 1;   
        if(y === 60) {
            downLeft();
            console.log('downLeft')
            console.log(x, y)
            return
        } else if(x === 0) {
            upRight();
            return
        }
        ballMove.style.left = x + "px";
        ballMove.style.top = y + "px";    
        requestAnimationFrame(upLeft);
    }

    function downLeft() {
        console.log('downLeft', x, y)
        x -= 1;
        y += 1;
        
        if(y === height) {
            upLeft();
            return
        } else if(x === 0) {
            downRight();
            return
        }
        ballMove.style.left = x + "px";
        ballMove.style.top = y + "px";    
        requestAnimationFrame(downLeft);       
        }

    if(direction === 'downRight') {
        downRight();
        }
}
moveBall();
