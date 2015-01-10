$(".DD").click(function(){
	var current = $(this).children(".DD-LIST")
	$(".DD-LIST").not(current).hide();
	$(current).toggle();
	$(this).on( "mouseleave", function() {
		$(".DD-LIST").hide()
  });
})
$(".DD").mouseover(function(){
	var current = $(this).children(".DD-LIST")
	$(current).show();
	$(this).on( "mouseleave", function() {
		$(".DD-LIST").hide()
  });
})