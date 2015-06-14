Template.sectionUpload.events({
    'submit #upload': function(event) {
        this.uploader.send(document.getElementById('files').files[0], function(error, downloadUrl) {
            if (error) {
                // Log service detailed response
                console.error('Error uploading', uploader.xhr.response);
                console.log(error);
            } else {
                Meteor.users.update(Meteor.userId(), {
                    $push: {
                        "profile.files": downloadUrl
                    }
                });
            }
        });

        return false;
    }
});

Template.progressBar.helpers({
  progress: function () {
    return Math.round(this.uploader.progress() * 100);
  }
});

Template.myPicture.helpers({
  url: function () {
    //if we are uploading an image, pass true to download the image into cache
    //this will preload the image before using the remote image url.
    return this.uploader.url(true);
  }
});