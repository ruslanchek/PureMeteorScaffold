App.clientUtils = {};

App.clientUtils.disableScrollEvents = function() {
	var body = document.body,
		timer;

	window.addEventListener('scroll', function() {
		clearTimeout(timer);

		if(!body.classList.contains('disable-hover')) {
			body.classList.add('disable-hover');
		}

		timer = setTimeout(function() {
			body.classList.remove('disable-hover');
		}, 300);
	}, false);
};

App.clientUtils.convertPrice = function(value) {
	function convertValute(value, valute) {
		var rates = [{
			name: 'eur',
			value: 1
		}, {
			name: 'usd',
			value: 1.15
		}, {
			name: 'rur',
			value: 62
		}, ];

		var valuteRate = _.find(rates, function(rate) {
			return rate.name == valute;
		});

		var result = 0;

		if(valuteRate) {
			result = valuteRate.value * value;
		} else {
			result = rates[0] * value;
		}

		return numeral(result).format('0,0.[00]');
	}

	function addValuteSign(value) {
		var valute = App.userData.getUserParam('valute');

		value = convertValute(value, valute);

		switch(valute) {
			case 'eur':
				{
					return value + ' €';
				}
				break;

			case 'usd':
				{
					return '$' + value;
				}
				break;

			case 'rur':
				{
					return value + ' <span class="rub">&#8381;</span>';
				}
				break;
		}
	}

	if(!value) {
		value = 0;
	} else {
		value = parseFloat(value);
	}

	return addValuteSign(value);
};

App.clientUtils.getUserLanguage = function() {
	return App.userData.getUserParam('language');
};

App.clientUtils.getUserValute = function() {
	return App.userData.getUserParam('valute');
};

App.clientUtils.setUserLanguage = function(language) {
	App.userData.setUserParam('language', language);

	TAPi18n.setLanguage(language)
		.done(function() {

		})
		.fail(function(error_message) {
			console.log(error_message);
		});
};

App.clientUtils.setUserValute = function(language) {
	App.userData.setUserParam('valute', language);
};
