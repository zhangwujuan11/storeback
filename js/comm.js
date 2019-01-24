$(document).ready(function () {
	//头尾公共提取
        $('header').load('top.html');
        $('footer').load('footer.html');
        
        var bhei= $("body").height();
       if(bhei>=950){
       	$("body,html").css("height","auto");
       	$("footer").css("bottom","-150px");
       }else{
       	$("body,html").css("height","100%");
       		$("footer").css("bottom","0");
       }
        
   	//店铺信息
   	$("#uplog").change(function(){
   		var newway=$(this).val();
   		console.log(newway);
   		$("#logoimg").attr("src",newway);
   	})
   	
   	//商家秀
   	$("#plustr").on("click",function  () {
   		var txt='<tr><td class="lunbo-num"></td><td class="lunbo-img"><img src="img/shop/imges_default.png"/></td><td class="lunbo-set"><input type="file" class="noshobt"/><button class="uptlogo">上传图片</button><img style="margin-left:3px;" src="img/shop/icon_Trash.png"/></td></tr>'
   		$(".show-rc table tbody").append(txt);
   		var nn=$(".table-striped tbody tr").length;
   		$(".table-striped tbody tr:last").find(".lunbo-num").html(nn);
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
   	
	
});


