App.clientUtils = {};

App.clientUtils.disableScrollEvents = function(){
    var body = document.body,
        timer;

    window.addEventListener('scroll', function() {
        clearTimeout(timer);

        if (!body.classList.contains('disable-hover')) {
            body.classList.add('disable-hover');
        }

        timer = setTimeout(function() {
            body.classList.remove('disable-hover');
        }, 300);
    }, false);
};

App.clientUtils.convertPrice = function(value){
    if(!value){
        value = 0;
    }else{
        value = parseFloat(value);
    }

    return numeral(value).format('0,0.[00]') + ' <span class="rub">&#8381;</span>';
};

App.clientUtils.setUserLanguage = function(language){
    TAPi18n.setLanguage(language)
        .done(function () {

        })
        .fail(function (error_message) {
            console.log(error_message);
        });
};
