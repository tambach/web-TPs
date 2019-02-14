// not a safe way to call setup but it will work until script is placed after </body>
setup();

/**
 * should be run after DOM is ready
 */
function setup() {
    // better use const and let, we are not in 2010 to use var :P
    const DIMENSION = 10;

    const displayCanvas = document.getElementById("display");
    const ctx = displayCanvas.getContext("2d");
    const rectangles = []; // new Array() is obsolete, use [] instead.

    // generate rectangles
    for (let i = 0; i < DIMENSION; i++) {
        // new empty rectangle
        const rectangle = {
            color: "",
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };

        // push rendered rectangle into rectangles array
        rectangles.push(randRect(rectangle));
    }

    // test if any of them touch each others
    hitTestAll.bind(this, rectangles);

    // fill canvas context with rectangles
    rectangles.forEach(function (rectangle) {
        ctx.fillStyle = rectangle.color;
        ctx.fillRect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);
    });
}

/**
 *
 * @param array
 */
function hitTestAll(...array) { // WARNING: mutating parameters in JS is prohibited
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (i === j) continue;
            let answer = hitTest(array[i], array[j]);

            while (answer) {
                console.log(answer + " " + i + " " + j);
                array[i] = randRect(array[i]);
                answer = hitTest(array[i], array[j]);
            }

        }
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
 *  generates random rectangle
 * @param rect
 * @returns {*}
 */
function randRect(rect) { // WARNING: mutating parameters in JS is prohibited
    // instead of mutating parameter this function should return generated rectangle, but I leave that task for you :P
    rect.color = randColor();
    rect.w = randRange(10, 200);
    rect.h = randRange(10, 200);
    rect.x = randRange(0, document.body.clientWidth - rect.w); // not safe
    rect.y = randRange(0, document.body.clientHeight - rect.h); // not safe
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
