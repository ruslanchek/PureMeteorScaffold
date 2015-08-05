Template.offersBrick.onRendered(function(e) {
	var $item = $(this.firstNode);

	$item.imagesLoaded(function() {
		$item.addClass('appear loaded');

		Meteor.setTimeout(function() {
			$item.find('.loading-balls').remove();
		}, 300);
	});
});

Template.offersBrick.events({
	'click .star': function(event) {
		var favorite = false;

		if(this.favorite !== true) {
			favorite = true;
		}

		App.collections.offers.update(this._id, {
			$set: {
				favorite: favorite
			}
		});
	}
});

Template.offersBricks.onRendered(function(e) {
	var $item = $(this.firstNode),
		$thumbs = $item.find('.media-block-thumb');

	$(window).on('resize.thumbs', function() {
		$thumbs.css({
			height: $thumbs.width()
		});
	});

	$thumbs.css({
		height: $thumbs.width()
	});

	console.log($thumbs);
});
