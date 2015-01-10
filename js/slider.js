/*
	JQuery plugin: HSLider 
	Author: Pilaev Vladislav
	E-mail: msgforvlad@yandex.ru
*/
(function( $ ){

  $.fn.HSlider = function(options) {
  	var s = {}
    /*
  	s.control = options.control
    s.width = $(this).width()
    $(this).find('.data').width(s.width).css('float','left')
    s.boxWidth = $(this).find('.data').length*s.width
    $(this).find('div:first').width(s.boxWidth)
	s.obj = this
  */
    s.obj = this
    s.control = options.control
    s.setWidth = function(){
      s.width = $(s.obj).width()
      $(s.obj).find('.data').width(s.width).css('float','left')
      s.boxWidth = $(s.obj).find('.data').length*s.width
      $(s.obj).find('div:first').width(s.boxWidth)
    }

	$(s.control+' .next').click(function() {
      $(s.obj).animate({'scrollLeft':'+='+s.width},300)
    });
	$(s.control+' .prev').click(function() {
      $(s.obj).animate({'scrollLeft':'-='+s.width},300)
    });
    $(window).resize(function() {
      s.setWidth()
    });
    s.setWidth()
  }

})( jQuery )
