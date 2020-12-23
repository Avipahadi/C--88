var canvas = new fabric.Canvas("myCanvas");

var player_x = 0;
var player_y = 0;

var block_h = 30;
var block_w = 30;

var player_object = "";
var block_object = "";

function refresh() {
    location.reload();
}

function player_add() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function block_add(get_block) {
    fabric.Image.fromURL(get_block, function (block) {
        block_object = block;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    var keypressed = e.keyCode;
    if (e.shiftKey == true & keypressed == "80") {
        console.log(keypressed);
        block_h = block_h + 10;
        block_w = block_w + 10;
        console.log("Shift and P Pressed");
        document.getElementById("block_height").innerHTML = block_h;
        document.getElementById("block_width").innerHTML = block_w;
    }
    if (e.shiftKey == true & keypressed == "77") {
        console.log(keypressed);
        block_h = block_h - 10;
        block_w = block_w - 10;
        console.log("Shift and M Pressed");
        document.getElementById("block_height").innerHTML = block_h;
        document.getElementById("block_width").innerHTML = block_w;
    }
    if (e.ctrlKey == true & keypressed == "66") {
        console.log(keypressed);
        block_h = "30";
        block_w = "30";
        console.log("CTRL and B Pressed");
        document.getElementById("block_height").innerHTML = block_h;
        document.getElementById("block_width").innerHTML = block_w;
    }
    if (keypressed == "83") {
        block_add("cloud.jpg");
        console.log("STONE");
    }

    if (keypressed == "76") {
        block_add("light_green.png");
        console.log("LIGHT GREEN GRASS BLOCK");
    }

    if (keypressed == "68") {
        block_add("dark_green.png");
        console.log("DARK GREEN GRASS BLOCK");
    }

    if (e.shiftKey == false & keypressed == "71") {
        block_add("unique.png");
        console.log("GLOW STONE");
    }

    if (e.shiftKey == true & keypressed == "71") {
        block_add("ground.png");
        console.log("DIRT");
    }

    if (keypressed == "79") {
        block_add("trunk.jpg");
        console.log("LOG");
    }

    if (e.ctrlKey == false & keypressed == "66") {
        block_add("wall.jpg");
        console.log("BRICK");
    }

    if (keypressed == "89") {
        block_add("yellow_wall.png");
        console.log("YELLOW BRICK");
    }

    if (keypressed == "78") {
        block_add("Netherrack.png");
        console.log("NETHERRACK");
    }

    if (keypressed == "91") {
        refresh();
    }

    if (keypressed == "37") {
        left();
        console.log("left");
    }

    if (keypressed == "38") {
        up();
        console.log("up");
    }

    if (keypressed == "39") {
        right();
        console.log("right");
    }

    if (keypressed == "40") {
        down();
        console.log("down");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_h;
        console.log("block height =" + " " + block_h);
        console.log("When up arrow is pressed player y =" + "" + player_y)
        canvas.remove(player_object);
        player_add();
    }
}

function down() {
    if (player_y <= 660) {
        player_y = player_y + block_h;
        console.log("block height =" + " " + block_h);
        console.log("When down arrow is pressed player y =" + " " + player_y);
        canvas.remove(player_object);
        player_add();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_w;
        console.log("block width =" + " " + block_w);
        console.log("When right arrow is pressed player x =" + " " + player_x);
        canvas.remove(player_object);
        player_add();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_w;
        console.log("block_width =".concat(block_w));
        console.log("When left arrow is pressed player x =".concat(block_w));
        canvas.remove(player_object);
        player_add();
    }
}

function cont() {
    if (document.getElementById("h_f_c").innerHTML == "Show Controls") {
        document.getElementById("h_f_c").innerHTML = "Hide Controls";
        document.getElementById("c").style.display = "inline";
    }
    else {
        document.getElementById("h_f_c").innerHTML = "Show Controls";
        document.getElementById("c").style.display = "none";
    }
}
