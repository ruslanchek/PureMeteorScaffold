Handlebars.registerHelper('convertPrice', function(value) {
	return App.clientUtils.convertPrice(value);
});

Handlebars.registerHelper('pluralize', function(value, forms1, forms3, forms5, addStr) {
	var output = '';

	function plural (a){
		if ( a % 10 == 1 && a % 100 != 11 ) return 0;
		else if ( a % 10 >= 2 && a % 10 <= 4 && ( a % 100 < 10 || a % 100 >= 20)) return 1;
		else return 2;
	}

	if(value){
		var text;

		switch (plural(parseFloat(value))) {
			case 0: text = forms1; break;
			case 1: text = forms3; break;
			default: text = forms5; break;
		}

		output = (addStr === true) ? value + ' ' + text : text;
	}

	return output;
});

Handlebars.registerHelper('offerParamsConverter', function(obj){
    var result = [];

    function parseKey(key){
		return TAPi18n.__('offerParamKey.' + key);
    }

    function parseVal(val){
		if(_.isBoolean(val)){
			return TAPi18n.__('offerParamVal.' + ((val) ? 'yes' : 'no'));
		}

		return val;
    }

    _.each(obj, function(item){
    	for(var key in item){
    		result.push({
    			key: parseKey(key),
    			val: parseVal(item[key])
    		});
    	}
    });

    return result;
});
