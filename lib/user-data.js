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