Template.gallery.onRendered(function(e) {
	var $galleryContainer = $(this.firstNode),
		$gallery = $galleryContainer.find('.gallery'),
		$frame  = $galleryContainer.find('.frame'),
		$slidee = $frame.children('ul').eq(0),
		$wrap   = $frame.parent();

	$slidee.find('li').each(function(){
		var $frameItem = $(this);

		$frameItem.find('img').on('load', function(){
			$frameItem.addClass('loaded');

			setTimeout(function(){
				$frameItem.find('.loading').remove();
			}, 400);
		});
	});

	$frame.sly({
		horizontal: 1,
		itemNav: 'basic',
		smart: 1,
		activateOn: 'click',
		mouseDragging: 1,
		touchDragging: 1,
		releaseSwing: 1,
		startAt: 0,
		scrollBar: $wrap.find('.scrollbar'),
		scrollBy: 0,
		pagesBar: $galleryContainer.next('.gallery-pages'),
		activatePageOn: 'click',
		speed: 300,
		elasticBounds: 1,
		easing: 'easeOutExpo',
		dragHandle: 1,
		dynamicHandle: 1,
		clickBar: 1,

		// Buttons
		prevPage: $wrap.find('.prev'),
		nextPage: $wrap.find('.next'),
		// prev: $wrap.find('.prev'),
		// next: $wrap.find('.next')
		// forward: $wrap.find('.prev'),
		// backward: $wrap.find('.next'),
		// prevPage: $wrap.find('.prevPage'),
		// nextPage: $wrap.find('.nextPage')
	});

	var resizeItems = function(){
        var $items = $frame.find('ul li');

        $items.css('width', $frame.width());
        $items
        	.add($frame)
        	.add($gallery)
        	.add($galleryContainer)
        	.add($frame)
        		.css('height', $frame.width());
        		
        $frame.sly('reload');
    };

	resizeItems();

	var resizeTimeout;

    $(window).on('resize', function(){
    	clearTimeout(resizeTimeout);
    	
    	resizeTimeout = setTimeout(function(){
    		resizeItems();
    	}, 25);
    });
});