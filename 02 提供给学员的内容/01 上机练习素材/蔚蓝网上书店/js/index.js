//导航栏菜单
$(document).ready(function() {
	$("#menu").mouseenter(function() {
		$("#dd_menu_top_down").slideDown(1000);
	}).mouseleave(function() {
		$("#dd_menu_top_down").slideUp(1000);
	})
	//弹出广告 
	window.open('open.html', '', 'top=0,left=300,width=500,height=300');
	//右侧广告
	var a = parseInt($("#right").css("top"));
	$(window).scroll(function() {
		var atop = parseInt($(this).scrollTop());
		$("#right").offset({
			top: screenTop + atop
		})
	})
	$("#right").click(function() {
		$("#right").hide();
	})
	//轮播图
	function lunbo() {
		var index = 0;
		var stop = false;
		var $li = $("#content").find("#scroll_img").children("li");
		var $page = $("#content").find("#scroll_number").children("li");
		$page.eq(index).addClass("scroll_number_over").stop(true, true).siblings().removeClass("scroll_number_over");
		$page.mouseover(function() {
			stop = true;
			index = $page.index($(this));
			$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
			$(this).addClass("scroll_number_over").stop(true, true).siblings().removeClass("scroll_number_over");
		}).mouseout(function() {
			stop = false;
		});
		setInterval(function() {
			if(stop) return;
			index++;
			if(index >= $li.length) {
				index = 0;
			}
			$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
			$page.eq(index).addClass("scroll_number_over").stop(true, true).siblings().removeClass("scroll_number_over");
		}, 3000);
	}
	lunbo();
	//书讯快递
	function movedome() {
		var marginTop = 0;
		var stop = false;
		var interval = setInterval(function() {
			if(stop) return;
			$("#express").children("li").first().animate({
				"margin-top": marginTop--
			}, 0, function() {
				var $first = $(this);
				if(!$first.is(":animated")) {
					if((-marginTop) > $first.height()) {
						$first.css({
							"margin-top": 0
						}).appendTo($("#express"));
						marginTop = 0;
					}
				}
			}, 10);
			$("#express").mouseover(function() {
				stop = true;
			}).mouseout(function() {
				stop = false;
			});
		});
	}
	movedome();
	//电子书
	$(".book ul img").mouseenter(function() {
		$(this).animate({
			width: "110%"
		}, "slow");
	}).mouseleave(function() {
		$(this).animate({
			width: "80%"
		}, "slow");
	});

	$(".tab ol li:first-of-type").mouseover(function() {
		$(".tab ol li:last-of-type").css({"background":"#efefef","border-left":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"});
        $(this).css({"width":"119px","background":"#ffffff","border":"none"});
		$(".tab ul:first-of-type").show();
		$(".tab ul:last-of-type").hide();
	});
	$(".tab ol li:last-of-type").mouseover(function() {
		$(".tab ol li:first-of-type").css({"background":"#efefef","border-left":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"});
        $(this).css({"width":"119px","background":"#ffffff","border":"none"});
		$(".tab ul:first-of-type").hide();
		$(".tab ul:last-of-type").show();
	});
	$(".tab ul li p").mouseenter(function(){
        $(this).next().show();
        $(this).hide();
        $(this).parent().siblings().children("p").show().end().children("dl").hide();
    })
});