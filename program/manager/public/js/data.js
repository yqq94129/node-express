//上一页
$("#prePage").click(function(){
	//alert();
	var pageNo = $("#curPage").val();
	pageNo--;
	console.log(pageNo);
	$.ajax({
		type:"get",
		url:"/data",
		data:{
			pageNO:pageNo
		},
		success:function(res){
			location.href = "/data?pageNO="+pageNo;
		}
	});
})

//下一页
$("#nextPage").click(function(){
	//alert();
	var pageNo = $("#curPage").val();
	console.log(pageNo);
	pageNo++;
	$.ajax({
		type:"get",
		url:"/data",
		data:{
			pageNO:pageNo
		},
		success:function(res){
			location.href = "/data?pageNO="+pageNo;
		}
	});
})
