App.staticData = {};

App.getStaticById = function(id, namespace){
	if(App.staticData[namespace]) {
		return _.find(App.staticData[namespace], function (item) {
			return item.id == id;
		});
	}
};