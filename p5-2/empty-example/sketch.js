let mo;

function preload() {
  mo = loadModel('3.obj');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(220);
  scale(50);
  model(mo);
}