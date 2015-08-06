Router.plugin('dataNotFound', {
	notFoundTemplate: '404'
});

Router.configure({
	notFoundTemplate: '404'
});

Router.route('/', {
	name: 'home',
	controller: 'HomeController',
	action: 'index'
});

Router.route('/search', {
	name: 'search',
	controller: 'SearchController',
	action: 'index'
});

Router.route('/offers/:_id', {
	name: 'offer',
	controller: 'OfferController',
	action: 'index'
});

Router.route('/user/offers/:_id', {
	name: 'userOfferEdit',
	controller: 'UserOfferEditController',
	action: 'index'
});

// Router.map(function() {
//
//
// 	this.route('mapFullscreen', {
// 		layoutTemplate: 'layoutMapFullscreen',
// 		path: '/map',
// 		data: function() {
//
// 		}
// 	});
//
// 	this.route('userOfferEdit', {
// 		path: '/user/offers/:_id',
// 		layoutTemplate: 'layoutUser',
// 		data: function() {
// 			var offer = App.collections.offers.findOne(this.params._id);
//
// 			if(!offer){
// 				return null;
// 			}
//
// 			return {
// 				offer: offer
// 			};
// 		}
// 	});
//
// 	this.route('sectionUpload', {
// 		path: '/upload',
// 		data: function() {
// 			return {
// 				uploader: new Slingshot.Upload("myFileUploads")
