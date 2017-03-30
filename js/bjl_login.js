// -------------------------------------------------------------
// 登陆页注册页跳转
	var menubtn=document.querySelectorAll('.login_box .head div');
	var option=document.querySelectorAll('.login_box .table');
	for (var i = 0; i < menubtn.length; i++) {
		menubtn[i].index=i;
		menubtn[i].addEventListener('touchstart',function(){
			for (var i = 0; i < menubtn.length; i++) {
				menubtn[i].classList.remove("active");
				option[i].style.display='none';
			};
			menubtn[this.index].classList.add('active');
			option[this.index].style.display='block';
		})
	};
// -------------------------------------------------------------
// ajax登陆注册验证
	var user=document.querySelector("#userl");
	var pwd=document.querySelector("#pwdl");
	var submit=document.querySelector('#submitl');
	var tishi=document.querySelector('#promptl');
	var flagu=false;
	var flagp=false;
	submit.addEventListener('touchstart',function(){
		var userv=user.value.trim();
		var passv=pwd.value.trim();
		var reg=/^\w{6,11}$/;
		// 检测账号密码是否为空
		if(reg.test(userv)){
			flagu=true;
		}else{
			flagu=false;
			setTimeout(function(){
				tishi.innerHTML='用户名不能为空'
				tishi.style.display="block";
			},500);
			setTimeout(function(){
				tishi.style.display="none";
			},3000);
			return;
		};
		if(reg.test(passv)){
			flagp=true;
		}else{
			flagp=false;
			setTimeout(function(){
				tishi.innerHTML='密码不能为空'
				tishi.style.display="block";
			},500)
			setTimeout(function(){
				tishi.style.display="none";
			},3000);
			return;
		};
		if(flagu&&flagp){
			ajax({
				type:'get',
				url:'php/checklogin.php',
				asynch:true,
				dataType:"text",
				data:{name:userv,password:passv},
				success:function(data){
					if(data==1){
						console.log('登陆成功');
						// location.href="success.php";
					}else if(data==2){
						console.log('密码错误');
					}else if(data==3){
						console.log('用户名不存在');
					}
				}
			})
		};
	})