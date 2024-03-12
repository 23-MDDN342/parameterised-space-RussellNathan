// const canvasWidth = 960;
// const canvasHeight = 500;

const pixelation = 10; // the size of each pixel relative to a real screen pixel, eg a value of 4 means that each square drawn on the pixel canvas is four pixels wide
let img;
let imga;

function preload() { 
	let main_canvas = createCanvas(canvasWidth, canvasHeight);
	main_canvas.parent('canvasContainer');

	img		=	loadImage('Img/Lightmap_N.png');
	imga	=	loadImage('Img/Lightmap_A.png');
	testIMG 	=	loadImage('Img/david normal.png');
}

function draw_one_frame(cur_frac) {
	background(0);
	// image(testIMG, 0, 0, canvasWidth, canvasHeight);
	// translate(-120,0);

	// loadPixels();   // create an array of pixels from the rendered image
	testIMG.loadPixels();
	background('blue');	// clear the rendered image
	noStroke();

	for (let Px=0; Px < testIMG.width; Px += pixelation) {
		for (let Py=0; Py < testIMG.height; Py += pixelation) {
			let i=(Px+Py*testIMG.width)*6;

			let j=lerp(testIMG.pixels[i + 0],testIMG.pixels[i + 1],cur_frac)+testIMG.pixels[i + 2]/2;
			if (j>200){
				fill(20,40);
				// square(Px+3, Py+3, pixelation*0.7);        
				fill(240);
				square(Px-110, Py, pixelation*0.8);
			}
			
		}
	}
}