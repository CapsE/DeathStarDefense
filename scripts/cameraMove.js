var rotation = 0;
var radius = 100;
document.onkeydown = checkKey;
function checkKey(e) {

	e = e || window.event;
	
	//e
	if (e.keyCode == '69') {
		camera.position.y += 1;
	}
	//f
	if (e.keyCode == '70') {
		Pipette();
	}
	//q
	if (e.keyCode == '81') {
		camera.position.y -= 1;
	}
	//a
	if (e.keyCode == '65') {
		rotation += 0.04;
	}
	//d
	if (e.keyCode == '68') {
		rotation += -0.04;
	}
	//w
	if (e.keyCode == '87') {
		radius -= 0.5;
	}
	//s
	if (e.keyCode == '83') {
		radius += 0.5;
	}
	//left
	if (e.keyCode == '100'){
		moveAllBlocks([0,-1,0]);
	}
	//up
	if (e.keyCode == '105'){
		moveAllBlocks([0,0,1]);
	}
	//right
	if (e.keyCode == '102'){
		moveAllBlocks([0,1,0]);
	}
	//down
	if (e.keyCode == '99'){
		moveAllBlocks([0,0,-1]);
	}
	//vor
	if (e.keyCode == '98'){
		moveAllBlocks([1,0,0]);
	}
	//zur�ck
	if (e.keyCode == '104'){
		moveAllBlocks([-1,0,0]);
	}
	//console.debug(e.keyCode);
	CalcRotation();
}

function CalcRotation(){
	camera.position.x = Math.cos(rotation)*radius;
	camera.position.z = Math.sin(rotation)*radius;
	camera.lookAt(center);
}