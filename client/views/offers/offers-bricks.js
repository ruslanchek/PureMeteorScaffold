Template.offersBrick.onRendered(function(e) {
	var $item = $(this.firstNode);

    $item.imagesLoaded(function(){
		$item.addClass('loaded');

		setTimeout(function(){
			$item.find('.loading').remove();
		}, 400);
    });
});

Template.offersBrick.events({
	'click .star': function (event) {
		var favorite = false;

		if(this.favorite !== true){
			favorite = true;
		}

		App.collections.offers.update(this._id, {
            $set: {
                favorite: favorite
            }
        });
	}
});
