Template.mapFullscreen.onRendered(function() {
	var fullscreenMap = new App.Map({
		center: [51.505, 33.09],
		containerId: 'map-fullscreen',
		zoom: 3,
		layer: App.userData.getUserParam('mapLayer')
	}).init();

	Deps.autorun(function() {
		fullscreenMap.setLayer(App.userData.getUserParam('mapLayer'));
	});

	App.collections.offers.find().observe({
		added: function(document) {
			fullscreenMap.addMarker(document._id, {
				position: document.position,
				popupData: {
					title: document.title,
					address: document.address,
					price: App.clientUtils.convertPrice(document.price),
					id: document._id,
					picture: document.picture
				},
				onDragend: function(position) {
					App.collections.offers.update(document._id, {
						$set: {
							position: position
						}
					});
				}
			});
		},

		changed: function(newDocument, oldDocument) {
			fullscreenMap.changeMarkerData(newDocument._id, {
				position: newDocument.position,
				popupData: {
					title: newDocument.title,
					address: newDocument.address,
					price: App.clientUtils.convertPrice(newDocument.price),
					id: newDocument._id,
					picture: newDocument.picture
				}
			});
		},

		removed: function(oldDocument) {
			fullscreenMap.removeMarker(oldDocument._id);
		}
	});
});
