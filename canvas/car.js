function initFunc() {

    var canvas = document.getElementById("myCanvas");

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var r = 50;
        var x = -1000;

        setInterval(() => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.width);
            ctx.fillStyle = "#1FA010"
            ctx.fillRect((x) + 10, 100, 800, 200);
            ctx.fillStyle = "#FFFF00"
            ctx.fillRect((x) + 810, 180, 150, 120);
            ctx.fillStyle = "#000000"
            ctx.beginPath();
            ctx.arc((x) + 120, 325, 50, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc((x) + 720, 325, 50, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc((x) + 850, 325, 50, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = "#FFFFFF"
            ctx.beginPath();
            ctx.arc((x) + 120, 325, 30, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc((x) + 720, 325, 30, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc((x) + 850, 325, 30, 0, 2 * Math.PI);
            ctx.fill();
            x = x + 10;
            if (x > ctx.canvas.width) {
                x = -1000;
            }
        }, 30)

    }

}