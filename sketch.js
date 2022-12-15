/* eslint-disable no-undef, no-unused-vars */
let x = 0,
  y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
  background(255);
}

function draw() {
  // Put drawings here
  for (i = 0; i < height; i += 100) {
    for (j = 0; j < width; j += 200) {
      abc(j, i);
    }
    i += 100;
    for (j = 100; j < width; j += 200) {
      abc(j, i);
    }
  }

  for (i = 0; i < height; i += 100) {
    for (j = 100; j < width; j += 200) {
      def(j, i);
    }
    i += 100;
    for (j = 0; j < width; j += 200) {
      def(j, i);
    }
  }
}

function abc(x, y) {
  fill(0);
  noStroke();
  //triangle(x, y, x + 200, y, x, y + 200);
  colorMode(HSB, 360, 256, 256);
  fill(random(0, 130), 255, 255, 0.07);
  for (
    a = 95, b = 5, c = 85, d = 15;
    a >= 15 && b <= 85 && c >= 5 && d <= 95;
    a -= 20, b += 20, c -= 20, d += 20
  ) {
    triangle(x, y, x + a, y + b, x + c, y + d);
  }
  // triangle(x, y, x + 95, y + 5, x + 85, y + 15);
  // triangle(x, y, x + 75, y + 25, x + 65, y + 35);
  // triangle(x, y, x + 55, y + 45, x + 45, y + 55);
  // triangle(x, y, x + 35, y + 65, x + 25, y + 75);
  // triangle(x, y, x + 15, y + 85, x + 5, y + 95);

  for (
    a = 95, b = 5, c = 85, d = 15;
    a >= 15 && b <= 85 && c >= 5 && d <= 95;
    a -= 20, b += 20, c -= 20, d += 20
  ) {
    triangle(x + 100, y + 100, x + a, y + b, x + c, y + d);
  }
  // triangle(x + 100, y + 100, x + 95, y + 5, x + 85, y + 15);
  // triangle(x + 100, y + 100, x + 75, y + 25, x + 65, y + 35);
  // triangle(x + 100, y + 100, x + 55, y + 45, x + 45, y + 55);
  // triangle(x + 100, y + 100, x + 35, y + 65, x + 25, y + 75);
  // triangle(x + 100, y + 100, x + 15, y + 85, x + 5, y + 95);
}

function def(x, y) {
  fill(0);
  noStroke();
  //triangle(x, y, x + 200, y, x, y + 200);
  colorMode(HSB, 360, 256, 256);
  fill(random(130, 250), 255, 255, 0.07);
  for (a = 5, b = 15; a <= 85 && b <= 95; a += 20, b += 20) {
    triangle(x, y + 100, x + a, y + a, x + b, y + b);
  }
  // triangle(x, y + 100, x + 5, y + 5, x + 15, y + 15);
  // triangle(x, y + 100, x + 25, y + 25, x + 35, y + 35);
  // triangle(x, y + 100, x + 45, y + 45, x + 55, y + 55);
  // triangle(x, y + 100, x + 65, y + 65, x + 75, y + 75);
  // triangle(x, y + 100, x + 85, y + 85, x + 95, y + 95);

  for (a = 5, b = 15; a <= 85 && b <= 95; a += 20, b += 20) {
    triangle(x + 100, y, x + a, y + a, x + b, y + b);
  }
  // triangle(x + 100, y, x + 5, y + 5, x + 15, y + 15);
  // triangle(x + 100, y, x + 25, y + 25, x + 35, y + 35);
  // triangle(x + 100, y, x + 45, y + 45, x + 55, y + 55);
  // triangle(x + 100, y, x + 65, y + 65, x + 75, y + 75);
  // triangle(x + 100, y, x + 85, y + 85, x + 95, y + 95);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
