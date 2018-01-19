//添加商品详细信息
$("#confirm").click(function(){
	var form = new FormData();
	form.append("goods_num", $("#goods_num").val());
	form.append("name", $("#name").val());
	form.append("huohao", $("#huohao").val());
	form.append("price", $("#price").val());
	form.append("pics", document.getElementById("pics").files[0]);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST","/api/addGoods");
	xhr.onreadystatechange = function(res){
		if (xhr.readyState==4 && xhr.status==200) {
			console.log(xhr.responseText);
			var res = JSON.parse(xhr.responseText);
			location.href = "./data?r=" + new Date().getTime();
		}
	}
	xhr.send(form);
})



//添加商品选项卡部分
$(function(){
	var $uli = $(".choice ul li");
	var $oli = $(".choice ol li");
	$oli.addClass("hide");
	$oli[0].className = "show";
	$uli.addClass("normal");
	$uli[0].className = "hover";
	$uli.click(function(){
		var index = $(this).index();
		$uli.removeClass().addClass("normal");
		$(this).removeClass().addClass("hover");
		$oli.removeClass().addClass("hide");
		$oli.eq(index).removeClass().addClass("show");
	});
})


