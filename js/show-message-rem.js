var designWidth=750;
function chengeRem() {
    var windWidth=document.documentElement.clientWidth;
    var rems=windWidth/designWidth*100+'px';
    document.documentElement.style.fontSize=rems;
}

chengeRem();
window.onresize=chengeRem;