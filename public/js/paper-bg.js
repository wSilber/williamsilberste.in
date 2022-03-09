var squares
var paths;
var aPoints
var aSquares
var change_Speed
var sSize
var innerHeight
var height
var distance
var aPaths = 15
var speed  = .2

function init() {
    setupPaths()
    size()
}

function resize() {
    project.activeLayer.removeChildren()
    size()
}

function size() {
    if(window.innerWidth < 600) {
        aPoints = 60
        height  = 100
        distance = 2
    } else if(window.innerWidth < 900) {
        aPoints = 15
        height  = 300
        ditance = 1.5
    } else {
        aPoints = 10
        height  = 200
        distance = 1
    }


    var point = new Point(0, 0);
    var size = new Size(window.innerWidth, window.innerHeight);
    var myRectangle = new Path.Rectangle(point, size);
    myRectangle.fillColor = '#141414';


    setupPaths();
}

function onFrame(event) {
    var sCounter = 0;
    for(var j = 0; j < paths.length; j++) {
        for(var i = 0; i < paths[j].segments.length; i++) {
            var segment = paths[j].segments[i];
            var sinus   = Math.sin((event.time * speed) + i);

            segment.point.y = sinus * height + (j*50)
            sCounter++;
        }
    }
}

function setupPaths() {
    paths = []
    squares = []

    for(var j = 0; j < aPaths; j++) {
        var path = new Path({
            strokeColor:'rgb(49, 49, 49)',
            strokeWidth: 0,
            strokeCap: 'square',
            selected: true
        })

        for(var i = 0; i <= aPoints; i++) {
            var point = new Point((window.innerWidth/aPoints) * i * distance, 50*j / distance)
            path.add(point);
        }

        paths.push(path)
    }

}

init()

window.addEventListener('resize', resize)