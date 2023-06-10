function initFunc() {

    var canvas = document.getElementById("myCanvas");
    var slider = document.getElementById("slider");
    // var slider2 = document.getElementById("mySlider");


    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var r = 50;

        var x = slider.value - 1000;
        // var y = slider2.value;
        var y = 10;

        function draw() {

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.width);
            ctx.fillStyle = "#1FA010"
            ctx.fillRect((x) + 10, ((y) + 100), 800, 200);
            ctx.fillStyle = "#FFFF00"
            ctx.fillRect((x) + 810, (y) + 180, 150, 120);
            ctx.fillStyle = "#000000"
            ctx.beginPath();
            ctx.arc((x) + 120, (y) + 325, 50, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc((x) + 720, (y) + 325, 50, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc((x) + 850, (y) + 325, 50, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = "#FFFFFF"
            ctx.beginPath();
            ctx.arc((x) + 120, (y) + 325, 30, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc((x) + 720, (y) + 325, 30, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc((x) + 850, (y) + 325, 30, 0, 2 * Math.PI);
            ctx.fill();


        }
        slider.oninput = function() {
                x = slider.value - 1000;
                console.log(slider.value - 1000);
                draw();
            }
            // slider2.oninput = () => {
            //     y = slider2.value;
            //     console.log(slider2.value)
            //     draw();
            // }

    }
}