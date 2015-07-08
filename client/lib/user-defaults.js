var userDefaults = Meteor.settings.public.userDefaults;

for(var item in userDefaults){
    if(!Session.get(item)){
        Session.set(item, userDefaults[item]);
    }
}
