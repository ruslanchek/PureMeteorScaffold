var userDefaults = {
	valute: 'rur',
	language: 'en'
};

_.each(userDefaults, function(val, key) {
	if(!localStorage.getItem(key)) {
		localStorage.setItem(key, val);
		Session.set(key, val);
	} else {
		Session.set(key, localStorage.getItem(key));
	}
});
