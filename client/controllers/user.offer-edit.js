UserRouteController = AppRouteController.extend({
	layoutTemplate: 'layoutUser'
});

UserOfferEditController = UserRouteController.extend({
	index: function() {
		this.data = function() {
			var offer = App.collections.offers.findOne(this.params._id);

			if(!offer) {
				return null;
			}

			return {
				offer: offer
			};
		};

		this.render('layoutUser');
	}
});
