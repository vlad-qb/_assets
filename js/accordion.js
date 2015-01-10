$(".Accordion").click(function(){
	var current = $(this).children(".data")
	$(current).slideDown('fast');
	$(".data").not(current).slideUp('fast');
})