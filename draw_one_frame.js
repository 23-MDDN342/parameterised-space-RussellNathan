function setup() { 
	img		=	loadImage('resources\Lightmap_N.png');
	imga	=	loadImage('resources\Lightmap_A.png');
}

function draw_one_frame() {
	// createCanvas(300, 300);
	// pixelDensity(1);
	Image(imga, 0, 0);
	loadPixels();
	background('cyan');
	noStroke();

	//pixelation code sourced from https://editor.p5js.org/ismanfromes/sketches/QYJuxVFTl0

	for (let x = 0; x < width; x += 10) {
		for (let y = 0; y < height; y += 10) {
		  
		  let i = (x + y * width) * 4;
	
		  let r = pixels[i + 0];
		  let g = pixels[i + 1];
		  let b = pixels[i + 2];
		  let a = pixels[i + 3];
	
		  fill(r);
		  square(x, y, 10);
		}
	  }
}