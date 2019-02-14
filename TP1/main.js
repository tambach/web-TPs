var c = document.getElementById("mydiv");
var ctx = c.getContext("2d");

var array = new Array(10);
for (var i = 0; i < 10; i++) {
    array[i] = {
        color: "",
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };
}
// generate random rectangles
for (var i = 0; i < 10; i++) {
    array[i] = randRect(array[i]);
}
// test if any of them touch each others
hitTestAll.apply(this, array);

// display the rectangles
for (var i = 0; i < 10; i++) {
    ctx.fillStyle = array[i].color;
    ctx.fillRect(array[i].x, array[i].y, array[i].w, array[i].h);
}


function main() {

}


/*function factory()
{
	var array = new Array(10);
	for(var i = 0; i < 10; i++)
	{
	  array[i] = {
		  color : "",
	          x : 0,
	          y : 0,
	          w : 0,
	          h : 0
	          };
	}
	for(var i = 0; i < 10; i++)
	{
		array[i].color = randColor();
		array[i].w = randRange(10, 200);
		array[i].h = randRange(10, 200);
		array[i].x = randRange(0, document.body.clientWidth - array[i].w);
		array[i].y = randRange(0, document.body.clientHeight - array[i].h);
	}
//ctx.fillStyle = array[i].color;
ctx.fillRect(array[i].x, array[i].y, array[i].w, array[i].h); 
return array;
}*/


function hitTestAll(...array) {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i == j) continue;
            var answer = hitTest(array[i], array[j]);

            while (answer) {
                console.log(answer + " " + i + " " + j);
                array[i] = randRect(array[i]);
                answer = hitTest(array[i], array[j]);
            }

        }
    }
}


function hitTest(r1, r2) {      // hit test box
    return (((r1.x + r1.w >= r2.x) && (r1.x <= r2.x + r2.w)) &&
        ((r1.y + r1.h >= r2.y) && (r1.y <= r2.y + r2.h)));
}

function randRect(rect) {
    rect.color = randColor();
    rect.w = randRange(10, 200);
    rect.h = randRange(10, 200);
    rect.x = randRange(0, document.body.clientWidth - rect.w);
    rect.y = randRange(0, document.body.clientHeight - rect.h);
    return rect;
}

function randRange(min, max) {       // rand int between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randColor() {       // random color
    return "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
}
