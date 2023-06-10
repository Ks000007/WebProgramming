function initFunc() {

    var canvas = document.getElementById("myCanvas");

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var r = 50;
        var i = 100;



        // const img = new Image();
        // img.src = "explosion.png";
        // img.onload = () => { ctx.drawImage(img, 0, 0); };


        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.width);
        ctx.fillStyle = "#1FA010"
        ctx.fillRect(177, i + 40, 80, 20);
        // ctx.fillStyle = "#FFFF00"
        // ctx.fillRect(90, 10, 50, 20);
        ctx.scale(0.75, 1);

        ctx.beginPath();
        ctx.arc(290, i + 121, 70, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        ctx.scale(1, 1);

        ctx.fillStyle = "#000000"
        ctx.beginPath();
        ctx.arc(290, i + 125, 40, 0, 2 * Math.PI);
        ctx.fill();

        function drawTriangle(x, y, count) {


            if (count == 1) {

                ctx.beginPath();
                ctx.moveTo(x - 30, y + 5);
                ctx.lineTo(x, y);
                ctx.lineTo(x - 20, y + 25);
                ctx.closePath();



                // the fill color
                ctx.fillStyle = "#FFCC00";
                ctx.fill();
            }
            if (count == 2) {

                ctx.beginPath();
                ctx.moveTo(x + 30, y + 5);
                ctx.lineTo(x, y);
                ctx.lineTo(x + 20, y + 25);
                ctx.closePath();



                // the fill color
                ctx.fillStyle = "#FFCC00";
                ctx.fill();
            }
            if (count == 3) {

                ctx.beginPath();
                ctx.moveTo(x - 10, y - 25);
                ctx.lineTo(x, y);
                ctx.lineTo(x + 10, y - 25);
                ctx.closePath();



                // the fill color
                ctx.fillStyle = "#FFCC00";
                ctx.fill();
            }
        }
        drawTriangle(290, i + 125, 1);
        drawTriangle(290, i + 125, 2);
        drawTriangle(290, i + 125, 3);
        ctx.fillStyle = "#000000"
        ctx.beginPath();
        ctx.arc(290, i + 125, 4, 0, 2 * Math.PI);
        ctx.fill();
        i = i + 10;
        if (i > ctx.canvas.width) {
            i = -100;
        }


    }

}