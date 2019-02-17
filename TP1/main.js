
window.addEventListener("load", setup);

let numrect = 10; 
let rects = []; 

function setup() {
    for(let i = 0; i < numrect; i++) { // loop create divs
		let div = document.createElement("div"), rect = randRect(); // create div and gen random rect
		while(hits(rect)) rect = randRect(); // if hittest, brute force gen new rect
		rects.push(rect); // add to rects
		Object.assign(div.style, {position: "absolute", width: rect.w + "px", height: rect.h + "px", left: rect.x + "px", top: rect.y + "px", backgroundColor: randColor()}); // assign style
		document.body.appendChild(div); // add to body
	}
}


/**
 *
 * @param r1
 * @param r2
 * @returns {boolean}
 */
function hitTest(r1, r2) {      // hit test box
    return (((r1.x + r1.w >= r2.x) && (r1.x <= r2.x + r2.w)) &&
        ((r1.y + r1.h >= r2.y) && (r1.y <= r2.y + r2.h)));
}


/**
* Test all 
*/
function hits(test) { // hittest against multiple boxes
	for(let rect of rects) if(hitTest(test, rect)) return true;
	return false;
}
/**
 *  generates random rectangle
 */
function randRect() {
	let rect = {w: randRange(20, 200), h: randRange(20, 200)}; // generate size
	Object.assign(rect, {x: randRange(0, document.body.clientWidth - rect.w),
	 y: randRange(0, document.body.clientHeight - rect.h)}); // add coordinates
	return rect;
}

/**
 *  generates random with range
 * @param min
 * @param max
 * @returns {*}
 */
function randRange(min, max) {       // rand int between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * generates random color
 * @returns {string}
 */
function randColor() {       // random color
    return "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
}




