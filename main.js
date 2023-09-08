function preload() {
    
}

function setup() {
    canvas = createCanvas(500 , 500 );
    canvas.position( 110 , 300 );
    video = createCapture(VIDEO);
    video.hide() ;
    filters = "" ;
}

function draw() {
    image(video , 0 , 0 ,500 , 500 ) ;
    tint(filters);
}

function addfil() {
    filters = document.getElementById("color").value ;
}

function take_snapshot() {
    save("filters.png") ; 
}