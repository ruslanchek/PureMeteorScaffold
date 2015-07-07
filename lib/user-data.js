App.userData = {};

App.userData.getUserParam = function(name){
    return Session.get(name);
};

App.userData.setUserParam = function(name, val){
    return Session.set(name, val);
};

App.userData.isUserParam = function(name, val){
    return Session.equals(name, val);
};

App.userData.setDefaults = function(){
    Session.clearPersistent();

    var userDefaults = Meteor.settings.public.userDefaults;

    for(var item in userDefaults){
        if(!Session.equals(item, userDefaults[item])){
            Session.setDefault(item, userDefaults[item]);
        }
    }
};
