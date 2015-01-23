/*
	JQuery plugin: HSLider 
	Author: Pilaev Vladislav
	E-mail: msgforvlad@yandex.ru
*/
(function( $ ){
	$.fn.H2Slider = function(options) {
	    var settings = $.extend( {
	      'containerWidth'         : 0, //длина слайдера
	      'boxWidth' 			   : 0,
	      'speed' 			       : 700,
	      'timeout' 			   : 2000,
	      'initCounter'			   : 0,
	      'timer'                  : false
	    }, options);
	    methods.init(settings)
	    $(settings.buttons+' .next').click(function() {
	    	clearInterval(settings.timer); 
			methods.next(settings)
	    });
	    $(settings.buttons+' .prev').click(function() {
	    	clearInterval(settings.timer); 
			methods.prev(settings)
	    });
	    $(window).resize(function() {
	    	methods.init( settings )
	    	clearInterval(settings.timer);
	    	/*
	    	Делать ресайз по завершению изменения размера окна
	    	settings.resizing = 1
	    	settimeout resizing = 0
	    	settimeout if ! resizing methods.resize
	    	*/
    	});
	}
  	var methods = {
	    next : function( settings ) {
	    	$(settings.slider).animate({'scrollLeft':'+='+settings.containerWidth},settings.speed)
	    },
	    prev : function( settings ) { 
	    	$(settings.slider).animate({'scrollLeft':'-='+settings.containerWidth},settings.speed)
	    },
	    init : function( settings ){
	    	settings.containerWidth = $(settings.slider).width() //расчет длины слайдера
	    	$(settings.slider).find('.data').width(settings.containerWidth).css('float','left') //установка длины каждого слайда
	    	settings.boxWidth = $(settings.slider).find('.data').length*settings.containerWidth  //расчет длины всех слайдов
	    	$(settings.slider).find('div:first').width(settings.boxWidth) //установка общей длины для всех слайдов
	    	if( settings.autoScroll > 0 ) methods.autoScroll( settings ) //активация автоскроллинга
	    },
		autoScroll : function( settings ){
			$(settings.slider).animate({'scrollLeft':'='+0},0)
			settings.timer = setInterval(function(){
				settings.initCounter++
				setTimeout( function(){
					methods.next( settings )
				},settings.timeout)
				//ждем завершения анимации и определяем последний слайд
		    	setTimeout( function(){
		    		var finishWidth = settings.boxWidth - settings.containerWidth
		    		if($(settings.slider).scrollLeft() == finishWidth)
		    			methods.rewind( settings )
		    	},settings.timeout)
			}, settings.timeout*2) 
		},
	    resize : function(settings){
	    	//$("#scroll").html(settings.initCounter)
	    },
	    rewind : function( settings ){
			$(settings.slider).animate({'scrollLeft':'-='+settings.boxWidth},settings.speed)
	    }
  	}
})( jQuery )