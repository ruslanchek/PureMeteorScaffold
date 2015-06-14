Meteor.startup(function() {
	App.clientUtils.disableScrollEvents();
	App.clientUtils.setUserLanguage(App.userData.getUserParam('language'));
});
