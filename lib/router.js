

Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: '404'
});

Router.map(function() {
	this.route('home', {
		path: '/',
		layoutTemplate: 'layoutHome',
		data: function(){
			var offers = App.collections.offers.find({  }, {
                limit: 24
            });

            return {
            	offers: offers
            };
		}
	});

	this.route('search', {
		path: '/search',
		layoutTemplate: 'layoutSearch'
	});

	this.route('mapFullscreen', {
		layoutTemplate: 'layoutMapFullscreen',
		path: '/map',
		data: function(){

		}
	});

	this.route('userOfferEdit', {
		path: '/user/offers/:_id',
		layoutTemplate: 'layoutUser',
		data: function(){
			var offer = App.collections.offers.findOne(this.params._id);

            return {
                offer: offer
            };
		}
	});

	this.route('sectionUpload', {
		path: '/upload',
		data: function(){
			return {
				uploader: new Slingshot.Upload("myFileUploads")
			};
		}
	});

	this.route('offer', {
		layoutTemplate: 'layoutOffer',
		path: '/offers/:_id',
		data: function(){
			var offer = App.collections.offers.findOne(this.params._id);

            return {
                offer: offer
            };
		}
	});
});
