Slingshot.createDirective('myFileUploads', Slingshot.S3Storage, {
    bucket: 'f4realty',
    region: 'eu-central-1',
    acl: 'public-read',

    authorize: function() {
        if (!this.userId) {
            var message = 'Please login before posting files';
            throw new Meteor.Error('Login Required', message);
        }

        return true;
    },

    key: function(file) {
        // var user = Meteor.users.findOne(this.userId);
        // console.log(user)
        return 'offers/' + this.userId + '/' + file.name;
    }
});