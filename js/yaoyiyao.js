var yaoImg=$('.yao-img');
var yaoZhe=$('.yao-zhe');
function resize(){
	var ch=document.documentElement.clientHeight;
	yaoImg.style.height=ch+'px';
}
resize();
window.addEventListener('resize',resize);



var img=$('.yao-zhe');
var last=$('.yao-box .last');
img.addEventListener('touchstart',function(){
	this.style.display='none';
	last.style.display='block';
})



// 摇一摇  本地存储

if(localStorage.getItem('yao')){
	img.style.display='none';
	last.style.display='block';
}else{
	localStorage.setItem('yao','diyici');
}









function $(arr){
	return document.querySelector(arr);
}


