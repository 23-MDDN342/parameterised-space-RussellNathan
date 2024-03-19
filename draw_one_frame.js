// const canvasWidth = 960;
// const canvasHeight = 500;

const pixelation = 12; // the size of each pixel relative to a real screen pixel, eg a value of 4 means that each square drawn on the pixel canvas is four pixels wide
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

	// create an array of pixels from the image file
	testIMG.loadPixels();
	background('blue');	// clear the rendered image
	noStroke();

	//
	for (let Px=0; Px < testIMG.width; Px += pixelation) {
		for (let Py=0; Py < testIMG.height; Py += pixelation) {
			let i=(Px+Py*testIMG.width)*5;


			let j;
			if (cur_frac<1/4){
				j=lerp(testIMG.pixels[i + 0],testIMG.pixels[i + 1],cur_frac*4);
			}else if (cur_frac<2/4){
				j=lerp(testIMG.pixels[i + 1],255-testIMG.pixels[i + 0],(cur_frac*4)%1);
			}else if (cur_frac<3/4){
				j=lerp(255-testIMG.pixels[i + 0],255-testIMG.pixels[i + 1],(cur_frac*4)%1);
			}else {
				j=lerp(255-testIMG.pixels[i + 1],testIMG.pixels[i + 0],(cur_frac*4)%1);
			}

			// j *= (testIMG.pixels[i + 2])/210;


			if (testIMG.pixels[i+3]>1 & j>0){
				fill(20,40);
				// square(Px-113, Py-83, pixelation*0.7);        
				fill(240);
				square(Px-110, Py-90, pixelation * j/250 * (testIMG.pixels[i+2]-200)/30 );
			}
			
		}
	}
}