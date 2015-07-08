Template.layoutSearch.events({
	'submit #search': function (event) {
        event.preventDefault();

        EasySearch
            .getComponentInstance({index: 'offers'})
            .search($('#search-input').val());
	}
});
