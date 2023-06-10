var canvas = document.getElementById('my_Canvas');
canvas.width = 700;
canvas.height = 700;
var gl = canvas.getContext('webgl2');
var r = Math.random();
var g = Math.random();
var b = Math.random();
var ver1 = 0.5 * Math.random();
var ver2 = -Math.random();
var ver3 = Math.random();
var ver4 = -Math.random();
var vertices = [ver1, 0.1, 0.0, 0.2, -ver1, 0.0, 0.4, ver3, 0.0, ver4, 0.5, 0.0, ver3, 0.0, 0.0, -ver2, -0.3, 0.0,

    0.5, -ver3, 0.0, ver2, ver4, 0.0, -0, ver2, 0.0,


];

var indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


var vertex_buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);


gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

gl.bindBuffer(gl.ARRAY_BUFFER, null);

var Index_Buffer = gl.createBuffer();


gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

var vertCode =
    'attribute vec3 coordinates;' +

    'void main(void) {' +
    ' gl_Position = vec4(coordinates, 1.0);' +
    '}';


var vertShader = gl.createShader(gl.VERTEX_SHADER);

gl.shaderSource(vertShader, vertCode);

gl.compileShader(vertShader);

'void main(void) {' +
' gl_Position = vec4(coordinates, 1.0);' +
'gl_PointSize = 10.0;' +
'}';


var fragCode =
    'void main(void) {' +
    ' gl_FragColor = vec4(1, 1, 1, 1);' +
    '}';

var fragShader = gl.createShader(gl.FRAGMENT_SHADER);


gl.shaderSource(fragShader, fragCode);


gl.compileShader(fragShader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertShader);
gl.attachShader(shaderProgram, fragShader);

gl.linkProgram(shaderProgram);

gl.useProgram(shaderProgram);

gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);

var coord = gl.getAttribLocation(shaderProgram, "coordinates");

gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 3 * Float32Array.BYTES_PER_ELEMENT, 0);

gl.enableVertexAttribArray(coord);
var color = [];
for (var i = 0; i < 3; i++) {
    color.push(Math.random())
}
gl.clearColor(color[0], color[1], color[2], 1);

gl.enable(gl.DEPTH_TEST);

gl.clear(gl.COLOR_BUFFER_BIT);

gl.viewport(0, 0, canvas.width, canvas.height);

gl.drawElements(gl.LINE_LOOP, indices.length, gl.UNSIGNED_SHORT, 0);