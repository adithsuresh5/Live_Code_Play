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