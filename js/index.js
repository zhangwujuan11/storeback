$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		var links = this.el.find('.link');
		links.on('click', {
			el: this.el,
			multiple: this.multiple
		}, this.dropdown)
	}
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
		$this = $(this), $next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		
		
		if(!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
			
		};
	}
	var accordion = new Accordion($('#accordion'), false);
	$(".link").click(function  () {
		var bi=$(this).find(".plus");
		if(bi.is(':hidden')){
			$(this).find(".jian").hide();
			$(this).find(".plus").show();
			$(this).parent().siblings().find(".jian").hide();
			$(this).parent().siblings().find(".plus").show()
		}else{
			$(this).find(".jian").show();
			$(this).find(".plus").hide();
			$(this).parent().siblings().find(".jian").hide();
			$(this).parent().siblings().find(".plus").show()
		}
	})
});