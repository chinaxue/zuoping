var menu = document.querySelectorAll(".select li");
console.log(menu);
var option = document.querySelectorAll(".container");
var cbox = document.querySelector(".container-box");
var w= option[0].offsetWidth/100;
var cw=cbox.offsetWidth;
for (var i = 0; i < menu.length; i++) {
	menu[i].index=i;
	menu[i].addEventListener('touchstart',function(){
			for (var i = 0; i < menu.length; i++) {
				menu[i].classList.remove("active");
			};
			menu[this.index].classList.add("active");
			cbox.style.transform='translate3d('+-this.index*33.33+'%,0,0)';
			cbox.style.webkitTransform='translate3d('+-this.index*33.33+'%,0,0)';
	},false);
};