var Level0RowsAndColumns = [];
Level0RowsAndColumns["row"] = 3;
Level0RowsAndColumns["column"] = 3;

var Level1RowsAndColumns = [];
Level1RowsAndColumns["row"] = 3;
Level1RowsAndColumns["column"] = 3;

var Level2RowsAndColumns = [];
Level2RowsAndColumns["row"] = 3;
Level2RowsAndColumns["column"] = 3;

var Level3RowsAndColumns = [];
Level3RowsAndColumns["row"] = 3;
Level3RowsAndColumns["column"] = 3;

var Level4RowsAndColumns = [];
Level4RowsAndColumns["row"] = 4;
Level4RowsAndColumns["column"] = 4;

var Level5RowsAndColumns = [];
Level5RowsAndColumns["row"] = 4;
Level5RowsAndColumns["column"] = 4;

var Level6RowsAndColumns = [];
Level6RowsAndColumns["row"] = 5;
Level6RowsAndColumns["column"] = 5;

var Level7RowsAndColumns = [];
Level7RowsAndColumns["row"] = 5;
Level7RowsAndColumns["column"] = 5;

var Interval;
var Title = [];
Title["title"] = "Anime Puzzle";	/*	Game Title	 */
Title["size"] = "6vw";					/*	Title Font Size	 */
Title["family"] = "Mansalva";		/* 	The Title Font Family	*/
var Start = [];
Start["title"] = "Start";			/*	Start Button Text	 */
Start["size"] = "3vw";					/* 	Start Button Font Size	*/
var LevelsTextt = [];				
LevelsTextt["size"] = "7vw";		/*	The Font Size For Every Level Number */
var Homemage;						/* 	The Empty Variable For Home Image	*/
var HomemageOverlay;				/*  The Empty Variable For The Overlay on Home image */
var HomemageText;					/*  The Title Text Empty variable*/
var StartButton;					/* The Start Button Empty Variable*/
var StartButtonText;				/* The Start Button Text Empty Variable*/
var gamestate = "Home";				/*  The State Of Game Throught this The Games Knows in which Stage Is it Example (Home, Levels etcc) */
var total_level = 8;				/* */
var homeImage = document.getElementById("home");		/* */
var LevelsImage = document.getElementById("Levels");		/* */
var level0img = document.getElementById("level1");		/* */
var level1img = document.getElementById("level2");		/* */
var level2img = document.getElementById("level3");		/* */
var level3img = document.getElementById("level4");		/* */
var level4img = document.getElementById("level5");		/* */
var level5img = document.getElementById("level6");		/* */
var level6img = document.getElementById("level7");		/* */
var level7img = document.getElementById("level8");		/* */
var Levels = [];
var LevelsText = [];
var gamepieces = [];
var gamepieee = [];
var rowspace = [];
var columnspace = [];
var levelsrowspace = [];
var levelscolumnspace = [];

var rect = [];
var LevelsRectCoordinates = [];


/* This HEHE function will create empty arrays that will be filled later by space manager function for level not levels these are used to position the
Tiles of Every Level Since the Columns and rows can be different that's why this function was neccessary */

HEHE();
function HEHE() {
	for (var i = 0; i < total_level; i++) {
		var b = i + 1;
	this["Level"+i+"rowspace"] = [];
	this["Level"+i+"columnspace"] = [];
	}
}

for (var i = 0; i < total_level; i++) {
 this["imgg"+i] = new Image();
eval("imgg"+i).src = eval("level"+i+"img").src;
console.log("Height : " + eval("imgg"+i).height + " Width : " + eval("imgg"+i).width + " Image : " + eval("imgg"+i).src)

}


function space_manager_for_Level(roww, columnn, levelrowspace, levelcolumnspace) {

 for (i = 0 ; i < roww; i++) {
var number = 1;
 while (number <= roww) {
     levelrowspace.push(i);
    number++;
}}

 for (i = 0 ; i < columnn; i++) {
var number = 0;
 while (number <= columnn-1) {
     levelcolumnspace.push(number);
    number++;
}}
}
function Putting_The_Values_Columnspace_And_Rowspace() {
for (var i = 0; i < total_level; i++) {
	var b = i + 1;
	var one = eval("Level"+i+"RowsAndColumns.row");
	var two = eval("Level"+i+"RowsAndColumns.column");
	var three = eval("Level"+i+"rowspace");
	var four = eval("Level"+i+"columnspace");
space_manager_for_Level(one, two, three, four);
}
}
Putting_The_Values_Columnspace_And_Rowspace();


function space_manager_for_Levels(levelsRow, levelsColumn) {
 for (i = 0 ; i < levelsRow; i++) {
if (i <= 3 ) { levelsrowspace.push(1);} else if (i > 3) { levelsrowspace.push(2);}
}

 for (i = 0 ; i < levelsColumn; i++) {

  if (i <= 3 ) { levelscolumnspace.push(i);} if (i > 3 ) { var b = i - 4; levelscolumnspace.push(b);}
}
}

space_manager_for_Levels(total_level, total_level);

function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return {
		x : event.clientX - rect.left,
		y : event.clientY - rect.top
	}
}

function isInside(pos, rect){
	return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
}
var myy = [];
function check() {
	var mousePos = getMousePos(myGameArea.canvas, event);

	if (isInside(mousePos, rect)) {
		window.removeEventListener('click', check, false);
		gamestate = "level";
		myGameArea.clear();
		clearInterval(Interval);
		levels();

    }
}
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function level_Components(b) {


	for (var i = 0; i < eval("Level"+b+"RowsAndColumns.row")*eval("Level"+b+"RowsAndColumns.column"); i++) {
if (i == eval("Level"+b+"RowsAndColumns.row")*eval("Level"+b+"RowsAndColumns.column")-1) {
			this["myGamePiece"+i] = new component("","","","","", eval("Level"+b+"columnspace")[i]*myGameArea.canvas.width/eval("Level"+b+"RowsAndColumns.row"), eval("Level"+b+"rowspace")[i]*myGameArea.canvas.height/eval("Level"+b+"RowsAndColumns.row"), myGameArea.canvas.width/eval("Level"+b+"RowsAndColumns.row"), myGameArea.canvas.height/eval("Level"+b+"RowsAndColumns.column"), "rectangle", "white");
		
		} else {
			this["myGamePiece"+i] = new component(eval("imgg"+b), eval("Level"+b+"columnspace")[i]*eval("imgg"+b).width/eval("Level"+b+"RowsAndColumns.row"), eval("Level"+b+"rowspace")[i]*eval("imgg"+b).height/eval("Level"+b+"RowsAndColumns.row"), eval("imgg"+b).width/eval("Level"+b+"RowsAndColumns.row"), eval("imgg"+b).height/eval("Level"+b+"RowsAndColumns.row"), eval("Level"+b+"columnspace")[i]*myGameArea.canvas.width/eval("Level"+b+"RowsAndColumns.row"), eval("Level"+b+"rowspace")[i]*myGameArea.canvas.height/eval("Level"+b+"RowsAndColumns.row"), myGameArea.canvas.width/eval("Level"+b+"RowsAndColumns.row"), myGameArea.canvas.height/eval("Level"+b+"RowsAndColumns.column"), "image");
		}
		gamepieces.push(eval("myGamePiece"+i));

	
		

			this["my"+i] = new CCC(gamepieces[i].x,gamepieces[i].y, gamepieces[i].mybottom, gamepieces[i].myright)
		
		myy.push(eval("my"+i));
		}
		
		
	for (var i = 0; i < eval("Level"+b+"RowsAndColumns.row")*eval("Level"+b+"RowsAndColumns.column"); i++) {
		var hhh = eval("Level"+b+"RowsAndColumns.row")*eval("Level"+b+"RowsAndColumns.column")-1;
		gamepieces[i].x = myy[hhh - i].x;
		gamepieces[i].y = myy[hhh - i].y;
		gamepieces[i].mybottom = myy[hhh - i].mybottom;
		gamepieces[i].myright = myy[hhh - i].myright;
		
	}

updategamepieces(gamepieces);

for (var i = 0; i < eval("Level"+b+"RowsAndColumns.row")*eval("Level"+b+"RowsAndColumns.column"); i++) {

		if (i!=eval("Level"+b+"RowsAndColumns.row")*eval("Level"+b+"RowsAndColumns.column")-1){gamepieee.push(gamepieces[i]);}

}

updateGameArea(b);


}

function CCC(x, y, bottom, right) {
	this.x = x;
	this.y = y;
	this.mybottom = bottom;
this.myright = right;
	
}

function Home() {

	StartButton = new roundRect(myGameArea.canvas.width/2-myGameArea.context.measureText(Start.title).width*4.5, myGameArea.canvas.height/2-40, myGameArea.context.measureText(Start.title).width*9, 55, 20, "#fff", "#1e8bc3", 10);
	StartButtonText = new component(Start.title,Start.size,Title.family,"","", myGameArea.canvas.width/2, myGameArea.canvas.height/2, 0, 0, "text", "#FFF","black",5);
	Homemage = new component (homeImage, 0, 0, 0, 0, 0, 0, myGameArea.canvas.width+200, myGameArea.canvas.height+200, "image", "blue" );
	HomemageOverlay = new component("","","","","", 0, 0, myGameArea.canvas.width, myGameArea.canvas.height, "rectangle", "rgba(0,0,0,0.4)");
	HomemageText = new component(Title.title,Title.size,Title.family,"","", myGameArea.canvas.width/2, myGameArea.canvas.height/2-myGameArea.context.measureText(Title.title).width/2*3, "", "", "text", "#FFF","black",15);

updateGameArea();

}

function levels() {
	var Hi = new component (LevelsImage, 0, 0, 0, 0, 0, 0, myGameArea.canvas.width, myGameArea.canvas.height, "image", "blue" );
		Hi.update();
	for (var i = 0; i < total_level; i++) {
	this["level"+i] = new roundRect(levelscolumnspace[i]*myGameArea.canvas.width/4+myGameArea.canvas.width/18, levelsrowspace[i]*myGameArea.canvas.height/3, myGameArea.canvas.width/6, myGameArea.canvas.height/4, 20, "#fff", "#1e8bc3", 10);
	this["levelText"+i] = new component(i+1,LevelsTextt.size,Title.family,"","", eval("level"+i).x+eval("level"+i).width/2, eval("level"+i).y+eval("level"+i).height/1.5, 0, 0, "text", "#FFF","black",LevelsTextt.size);
	Levels.push(eval("level"+i));
	LevelsText.push(eval("levelText"+i));
	Levels[i].update();
	LevelsText[i].update();
	

}

var LevelsEventListener = function() {var mmousePos = getMousePos(myGameArea.canvas, event);
for (var i = 0; i < total_level; i++) {
	if (mmousePos.x > Levels[i].x && mmousePos.x <  Levels[i].x+ Levels[i].width && mmousePos.y <  Levels[i].y+ Levels[i].height && mmousePos.y >  Levels[i].y) {

		window.removeEventListener('click', LevelsEventListener, false);
		gamestate = "level";
		myGameArea.clear();
		clearInterval(Interval);
		level(i);

    }
	}
}

	window.addEventListener('click', LevelsEventListener, false);
}

function level(n) {

	level_Components(n);

}

function startGame() {
	
    myGameArea.start();
	
	window.addEventListener('click', check, false);
if(gamestate == "Home") {Home(); Interval = setInterval(updateGameArea, 20);}

}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		

        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
			updateGameArea();
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
		
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }
}

function component(url, sx, sy, swidth, sheight, x, y, width, height, type, color,stroke,strokesize) {
    this.gamearea = myGameArea;
	this.type = type;
    this.width = width;
    this.height = height;  
    this.x = x;
	this.url = url;
    this.y = y; 
	this.swidth = swidth;
    this.sheight = sheight;  
    this.sx = sx;
    this.sy = sy; 
	this.myright = this.x + this.width;
    this.mybottom = this.y + this.height;
    this.update = function() {
	ctx = myGameArea.context;
if (this.sx == 0 && this.sy == 0 && this.swidth == 0 && this.sheight == 0 && this.type == "image" ) {
		
			ctx.drawImage(url, this.x, this.y, this.width, this.height);

    } else if (type == "image") {
			ctx.drawImage(url, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
			ctx.strokeStyle = '#fff';  // some color/style
			ctx.lineWidth = 1;       
			ctx.strokeRect(this.x, this.y, this.width, this.height);
 }  else if(type == "rectangle") {
			ctx.fillStyle = color;  // some color/style
			ctx.fillRect(this.x, this.y, this.width, this.height);
			ctx.lineWidth = 1;       
			ctx.strokeRect(this.x, this.y, this.width, this.height);
	}  else if(type == "text") {
			ctx.font = sx + " " + sy ;
			ctx.textAlign = "center";
			ctx.strokeStyle = stroke;
			ctx.lineWidth = strokesize;
			ctx.strokeText(url, x, y);
			ctx.fillStyle = color;
			ctx.fillText(url, x, y);
		
	}
	this.newpos = function() {
		this.y += 1;
	}
  
}
}


function roundRect(x, y, width, height, radius, fill, stroke, strokewidth) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  this.update = function() {
	  ctx = myGameArea.context;
	ctx.fillStyle = fill;
	ctx.strokeStyle = stroke;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
	  ctx.lineWidth = strokewidth;
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }
	rect["x"] = this.x;
	rect["y"] = this.y;
	rect["width"] = this.width;
	rect["heigth"] = this.height;
  }  
}

function rect(x, y, width, height) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;  
    this.x = x;
    this.y = y; 
	this.myright = this.x + this.width;
    this.mybottom = this.y + this.height;
    this.update = function() {
	ctx = myGameArea.context;
	
			ctx.rect( 100, this.y, this.width, this.height);
    
}
}

function UP() {
if (myGameArea.keys && myGameArea.keys[38]) {  for (i = 0; i < gamepieee.length; i++) {
		if ( Math.round(gamepieee[i].mybottom) == Math.round(gamepieces[gamepieces.length - 1].y) && gamepieee[i].x == gamepieces[gamepieces.length - 1].x ) {
			var GPY = gamepieces[gamepieces.length - 1].y; 
			var GPEY = gamepieee[i].y; 
			var GPBTM = gamepieces[gamepieces.length - 1].mybottom;
			var GPEBTM = gamepieee[i].mybottom;

			gamepieces[gamepieces.length - 1].y = GPEY;
			gamepieee[i].y = GPY;
			gamepieces[gamepieces.length - 1].mybottom = GPEBTM;
			gamepieee[i].mybottom = GPBTM;

			break
		}} }
}

function DOWN() {
    if (myGameArea.keys && myGameArea.keys[40]) {
	for (a = 0; a < gamepieee.length; a++) {
		if ( Math.round(gamepieces[gamepieces.length - 1].mybottom) == Math.round(gamepieee[a].y) && Math.round(gamepieee[a].x) == Math.round(gamepieces[gamepieces.length - 1].x) ) {
			var GPY = gamepieces[gamepieces.length - 1].y; 
			var GPEY = gamepieee[a].y; 
			var GPBTM = gamepieces[gamepieces.length - 1].mybottom;
			var GPEBTM = gamepieee[a].mybottom;
	 

			gamepieee[a].y = GPY;
			gamepieces[gamepieces.length - 1].y = GPEY;
			gamepieces[gamepieces.length - 1].mybottom = GPEBTM;
			gamepieee[a].mybottom = GPBTM;
			
			break;
		}} }
}

function LEFT() {
	if (myGameArea.keys && myGameArea.keys[37]) {for (i = 0; i < gamepieee.length; i++) {
		if ( Math.round(gamepieces[gamepieces.length - 1].x) == Math.round(gamepieee[i].myright) && Math.round(gamepieee[i].y) == Math.round(gamepieces[gamepieces.length - 1].y) ) {
			var GPX = gamepieces[gamepieces.length - 1].x; 
			var GPEX = gamepieee[i].x; 
			var GPRGHT = gamepieces[gamepieces.length - 1].myright;
			var GPERGHT = gamepieee[i].myright;


			gamepieces[gamepieces.length - 1].x = GPEX;
			gamepieee[i].x = GPX;
			gamepieces[gamepieces.length - 1].myright = GPERGHT;
			gamepieee[i].myright = GPRGHT;
	 
			
break
		}}  }
}

function RIGHT() {
    if (myGameArea.keys && myGameArea.keys[39]) { for (i = 0; i < gamepieee.length; i++) {
		if ( Math.round(gamepieces[gamepieces.length - 1].myright) == Math.round(gamepieee[i].x) && Math.round(gamepieee[i].y) == Math.round(gamepieces[gamepieces.length - 1].y) ) {
			var GPX = gamepieces[gamepieces.length - 1].x; 
			var GPEX = gamepieee[i].x; 
			var GPRGHT = gamepieces[gamepieces.length - 1].myright;
			var GPERGHT = gamepieee[i].myright;


			gamepieces[gamepieces.length - 1].x = GPEX;
			gamepieee[i].x = GPX;
			gamepieces[gamepieces.length - 1].myright = GPERGHT;
			gamepieee[i].myright = GPRGHT;
	 
break
		}} }
}


function updategamepieces(piece) {
	if (piece) {for (i = 0; i < piece.length; i++) {
	piece[i].update();
	
	}
}
}

function updateGameArea(b) {

	if (gamestate == "level") {
		
		myGameArea.clear();
		UP();DOWN();LEFT();RIGHT();
		
		
updategamepieces(gamepieces);
	}


if (gamestate == "Home") {
myGameArea.clear;
myGameArea.frameNo += 1;
Homemage.update();
HomemageOverlay.update();
HomemageText.update();
StartButton.update();
StartButtonText.update();

if (myGameArea.frameNo <= 100){Homemage.y -= 1;}
if (myGameArea.frameNo >= 100){Homemage.y += 1;}
if (myGameArea.frameNo == 199){myGameArea.frameNo = 0}


}
}


