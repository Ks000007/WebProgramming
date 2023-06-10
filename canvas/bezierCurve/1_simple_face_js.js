function initFunc() {
    var canvas = document.getElementById("myCanvas");

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(50, 10);
        ctx.lineTo(50, 410);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(50, 210);
        ctx.lineTo(250, 10);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(50, 210);
        ctx.lineTo(250, 410);
        ctx.stroke();
        // H
        ctx.beginPath();
        ctx.moveTo(1000, 10);
        ctx.lineTo(1000, 410);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(1250, 10);
        ctx.lineTo(1250, 410);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(1000, 210);
        ctx.lineTo(1250, 210);
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo(800, 100);
        ctx.bezierCurveTo(500, 0, 800, 150, 400, 100);
        ctx.stroke();


    } else
        alert("your browser don't support HTML5 canvas features");
}