var userDefaults = Meteor.settings.public.userDefaults;

for(var item in userDefaults){
    if(!Session.equals(item, userDefaults[item])){
        Session.setDefault(item, userDefaults[item]);
    }
}
