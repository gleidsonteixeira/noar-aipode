$(document).ready(function(){
	$(".button-collapse").sideNav({
		closeOnClick: true
	});
    $('.parallax').parallax();
    $('.tooltipped').tooltip({
    	delay: 10
    });
	aMenu();
	aBanner();
	aProdutos();
	aCarrinho();
})
$(window).resize(function(){
	aProdutos();	
})
function aMenu(){
	$("#aMenu li").click(function(){
		$("#aMenu li").removeClass("active");
		$(this).addClass("active");
	})
}
function aBanner(){
	$("#aBanner .aSlider").cycle({
		timeout: 2000
	});
}
function aProdutos(){
	$("#aProdutos .aSlide ul").cycle({
		timeout: 0,
		prev: "#aProdutos .aSlide .prev",
		next: "#aProdutos .aSlide .next"
	});
	$("#aProdutos .aInfo").cycle({
		timeout: 0,
		prev: "#aProdutos .aSlide .prev",
		next: "#aProdutos .aSlide .next"
	});

	var a = $(window).width();
	if(a <= 768 ){
		$("#aProdutos .a").removeClass("valign");
		$("#aProdutos .row").removeClass("valign-wrapper");
	}else{
		$("#aProdutos .a").addClass("valign");
		$("#aProdutos .row").addClass("valign-wrapper");
	}
}
function aCarrinho(){
	$("#aCarrinho").click(function(){
		$("#aPedido").addClass("active");
	})
	$("#aPedido p.fechar").click(function(){
		$("#aPedido").removeClass("active");
	})
	$("#aPedido a").click(function(){
		$("#aPedido form").addClass("active");
	})
	$("#aPedido form p").click(function(){
		$("#aPedido form").removeClass("active");
	})
}