// wai
var wai=$('.wai');
// 主体
var zBox=$('.zhuti-box');
// 侧滑页
var cehuaBox=$('.cehua-box');
var ceHuas=$('.cehuas');
var hjFoote=$('.hj-footer');
var ch = document.documentElement.clientHeight;
var cw = document.documentElement.clientWidth;
wai.style.width=cw+cehuaBox.offsetWidth+200+'px';
zBox.style.width=cw+'px';
// 动态获取浏览器高度
function resize(){
	var ch=document.documentElement.clientHeight;
	cehuaBox.style.height=ch+'px';
	// zBox.style.height=ch+'px';
	ceHuas.style.height=ch+'px';
}
resize();
window.addEventListener('resize',resize);




// 获取点击按钮
var btn=$('.zhuti-box .head>.btn>img');
// 侧滑效果
btn.addEventListener('touchstart',function(e){
	// zBox.classList.add('active');
	// hjFoote.classList.add('active');
	ceHuas.style.display='block';
	cehuaBox.classList.remove('active');
	// e.preventDefault();
	// window.ontouchmove=null;
})



ceHuas.addEventListener('touchstart',function(){
	// zBox.classList.remove('active');
	// hjFoote.classList.remove('active');
	ceHuas.style.display='none';
	cehuaBox.classList.add('active');
})
cehuaBox.addEventListener('touchmove',function(e){
	e.preventDefault();
	document.ontouchmove=null;
})


// 定位城市背景切换
var li=document.querySelectorAll('.cehua-box>.bottom>li');
var img=document.querySelectorAll('.cehua-box>.bottom>li img');

var spanZ=$('.zhuti-box .head>.btn>span');
var spans=document.querySelector('.cehua-box>.zhong>.zi>span');

var ul=$('.cehua-box>.bottom');

// 事件委派
ul.addEventListener('touchstart',function(){
	var e=e||window.event;
	var obj=e.target;
	// 判断obj是否为img
	if(obj.nodeName=='IMG'){
		for(var i=0;i<li.length;i++){
			li[i].classList.remove('active');
			img[i].src='img/tianjia.png';
		}
		// 切换图片路径
		obj.src='img/queding.png';
		// 切换li背景
		var parent=obj.parentNode.parentNode;
		parent.classList.add('active');
		// 获取城市，给顶部定位城市值
		var text=parent.childNodes[1].innerHTML;
		spans.innerHTML=text;
		spanZ.innerHTML=text;
	}else if(obj.nodeName=='LI'){
		for(var i=0;i<li.length;i++){
			li[i].classList.remove('active');
			img[i].src='img/tianjia.png';
		}
		obj.classList.add('active');
		obj.querySelector('img').src='img/queding.png';
		var text=obj.querySelector('span').innerHTML;
		spans.innerHTML=text;
		spanZ.innerHTML=text;
		//本地存储当前城市
		localStorage.setItem('nowPosition',text);
	}
})


//底部跳转获取当前城市
var hjJump = document.querySelectorAll('.hj-footer .hj-change a');
for(var i = 0;i<hjJump.length;i++){
	hjJump[i].onclick = function(){
		var nowP = localStorage.getItem('nowPosition');
		spanZ.innerHTML = nowP;
		spans.innerHTML = nowP;
	}
}

var nowP = localStorage.getItem('nowPosition');
spanZ.innerHTML = nowP;
spans.innerHTML = nowP;

//控制底部菜单定位到视口底部 防止手机输入法将底部位置改变
var hjFooter = document.querySelector('.hj-footer');
function toBottom(){
	ch = document.documentElement.clientHeight;
	var fh = hjFooter.offsetHeight;
	hjFooter.style.top = ch-fh+'px';
}

window.addEventListener('resize',function(){
	toBottom();
	console.log(1);
})
window.addEventListener('scroll',function(){
	toBottom();
})
// 动态设置top值
toBottom();//进行一个初始调用
//











function $(arr){
	return document.querySelector(arr);
}


