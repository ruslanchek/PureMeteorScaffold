Template.offerPage.events({
	'click .star': function (event) {
		var favorite = false;

		if(this.offer.favorite !== true){
			favorite = true;
		}

		App.collections.offers.update(this.offer._id, {
            $set: {
                favorite: favorite
            }
        });
	}
});