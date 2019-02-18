$(document).ready(function () {
	//头尾公共提取
        $('header').load('top.html');
        $('footer').load('footer.html');
                
   	//店铺信息
   	$("#uplog").change(function(){
   		var newway=$(this).val();
   		console.log(newway);
   		$("#logoimg").attr("src",newway);
   	})
   	
   	//商家秀
   	$("#plustr").on("click",function  () {
   		var $tr = $($("#lunbo-img-template").text());
   		$(".show-rc table tbody").append($tr);
   		var nn=$(".table-striped tbody tr").length;
   		$tr.find(".lunbo-num").html(nn);
   		if(nn >= 6){
   			$("#plustr").hide();
   		}else{
   			$("#plustr").show();
   		}
   		if (nn >= 4) {
   			$("body,html").css("height","auto");
       		$("footer").css("bottom","-150px");
   		} else{
   			$("body,html").css("height","100%");
       		$("footer").css("bottom","0");
   		}
   	})
   	
   	 $(document).on("change",".noshobt",function  () {
   		var lunimg=$(this).val();
   		$(this).parent(".lunbo-set").siblings(".lunbo-img").find("img").attr("src",lunimg);
   	})
   	 $(document).on("click",".lunbo-set img",function  () {
   	 	$(this).parent().parent("tr").remove();
   	 	var nn=$(".table-striped tbody tr").length;
   	 	for(var i = 0; i < nn; i++){
				$(".table-striped tbody tr").find(".lunbo-num").eq(i).html(i+1); 
				}
   		if(nn >= 6){
   			$("#plustr").hide();
   		}else{
   			$("#plustr").show();
   		}
   		if (nn >= 4) {
   			$("body,html").css("height","auto");
       		$("footer").css("bottom","-150px");
   		} else{
   			$("body,html").css("height","100%");
       		$("footer").css("bottom","0");
   		}
   	 })
   	 
   	 $(document).on("click",".trash",function  () {
   	 	$(this).parent().parent("tr").remove()
   	 })
   	 
   	 //推荐分类
	$(".mmend-rc h4").click(function  () {
		
		if (!$(".recheckbox").is(':visible')){
			$(".recheckbox").slideDown()
			$("#iconup").css("transform","rotate(0deg)")
		}else{
			$(".recheckbox").slideUp()
			$("#iconup").css("transform","rotate(180deg)")
		}
		
	})
   	
	
});


