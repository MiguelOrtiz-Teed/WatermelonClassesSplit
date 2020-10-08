
function setup() {
createCanvas(600, 600);

  for (let i = 0; i < halfCircles.length; i++){
    halfCirclePosition[i] = new Watermelon(halfCircles[i]);
  }
  for (let i = 0; i < seeds.length; i++){
    seedsPosition[i] = new Seed(seeds[i]);
  }
}

function draw() {

  background(135);
  for (i = 0; i < halfCircles.length; i++){
    push();
    halfCirclePosition[i].drawHalfCircle();
    halfCirclePosition[i].traceObjectGreen();
    halfCirclePosition[i].moveX();
    halfCirclePosition[i].moveY();
    pop();
  }

  for (i = 0; i < seeds.length; i++){
    push();
    seedsPosition[i].drawSeed();
    seedsPosition[i].traceObjectPink();
    seedsPosition[i].moveX();
    seedsPosition[i].moveY();
    pop();
  }
}
