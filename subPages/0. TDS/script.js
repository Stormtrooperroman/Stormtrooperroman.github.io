field.width=window.innerWidth;
field.height=window.innerHeight;

let ctx = field.getContext("2d");

function draw() {
    let bg = new Image(width=field.width, height= field.height);
    bg.src="img/background.jpg"
    bg.onload= () =>{
        ctx.drawImage(bg, 0, 0);
    }

}

draw();