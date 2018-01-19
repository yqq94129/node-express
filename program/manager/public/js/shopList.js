//列表点击事件
$(".contain ul li").click(function(){
	$(this).find("ol").toggle();
})

function openFn(){
	var tog = true;
	$(".contain ul li").on("click",function(event){
		if(parseInt($(this).css("height")) > 50){
			$(this).find("span").text("-");
			tog = false;
			event.stopPropagation();
		}else{
			$(this).find("span").text("+");
			tog = true;
			event.stopPropagation();
		}
	})
}
openFn();


