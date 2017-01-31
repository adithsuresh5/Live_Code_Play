
			var windowHeight = $(window).height();
			var navBarHeight = $(".navbar").height();
			var codeContainerHeight = windowHeight - navBarHeight;

			$(".code-container").height(codeContainerHeight+"px");

			$(".toggle").click
			(
				function()
				{
					$(this).toggleClass("btn-success");
					var activeDiv = $(this).html();
					$("."+activeDiv+"-container").toggle();
					var visibleDivs = $(".code-container").filter(function(){
							return($(this).css("display")!="none");
						}).length;	
					var Width = 100/visibleDivs;
					$(".code-container").css("width", Width+"%");
				}
			);

		/*	$('#btn-result').click(
					function() {
						$("#resultcontainer").contents().find("html").html("<style>"+$('#csscontainer').val()+"</style>"+$("#htmlcontainer").val());
						document.getElementById("resultcontainer").contentWindow.eval($('#jscontainer').val());
					}
				);
		*/
		
$(document).ready( function(){
	var p = $("#resultcontainer").contents().find("body");
	p.css("margin","2px");
 	p.html('<span id="bothtml"></span><style id="botcss"></style>');
 	
 	$("#htmlcontainer").on('keyup',function(){
  		p.find("#bothtml").html($(this).val());
 	});

	 $("#csscontainer").on('keyup',function(){
	  	p.find("#botcss").html($(this).val());
	 });

	 $("#jscontainer").on('change',function(){
	  p.find("#botjs").remove();
	  p.append('<script id="botjs">'+$(this).val()+'</script>');
	 });

	 $("#btn-result").on('click',function(){
	  p.find("#botjs").remove();
	  p.append('<script id="botjs">'+$("#jscontainer").val()+'</script>');
	 });

});