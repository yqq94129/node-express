$(function(){
	//验证码
	var code_con = document.getElementById("code_con");
	loginCode();
	function loginCode(){
		var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
		var str = "";
		for(var i = 0; i < 4; i++){
			var c = parseInt(Math.random()*arr.length);
			str += arr[c];
		}
		code_con.value = str;
	}
	//验证码点击事件
	$("#code_con").click(function(){
		loginCode();
	})
	//登录按钮
	$("#loginBtn").click(function(){
		function login(){
			$.ajax({
				url:"/api/login_ajax",
				type:"post",
				data:{
					username : $("#username").val(),
					pwd :$("#pwd").val()
				},
				success:function(res){
					console.log(res);
					if(res.codeStaus == 1){
						//alert(res.message);
						location.href = "./shopList?r=" + new Date().getTime();
					}else{
						alert(res.message);
					}
				}
			})
		}
		login();
	})
})


