HomeController = AppRouteController.extend({
	index: function() {
		this.data = function() {
			var offers = App.collections.offers.find({}, {
				limit: 24
			});

			return {
				offers: offers
			};
		};
		
		this.render('layoutHome');
	}
});
