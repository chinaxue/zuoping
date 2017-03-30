


var design = 750;

function resize(){
	var clientW = document.documentElement.clientWidth;
	document.documentElement.style.fontSize = clientW/design*100+'px';
}

resize();
window.addEventListener('resize',resize);