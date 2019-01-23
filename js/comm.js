$(document).ready(function () {
	//头尾公共提取
        $('header').load('top.html');
        $('footer').load('footer.html');
        
   	//店铺信息
   	$("#uplog").change(function(){
   		var newway=$(this).val();
   		console.log(newway)
   		$("#logoimg").attr("src",newway)
   	})
	
});


