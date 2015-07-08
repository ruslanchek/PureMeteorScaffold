Template.layoutSearch.events({
	'submit #search': function (event) {
        event.preventDefault();

        EasySearch.getComponentInstance({
            index: 'offers' ,
            limit: 4
        }).search($('#search-input').val());
	}
});
