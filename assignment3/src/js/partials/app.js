$(document).ready(function() {
    var body = $('body'),
        userIcon = $('.message__user').find('a'),
        userName = $('.message__name--show');


    userIcon.on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if($(this).closest('.message').hasClass('message--opened')) {
            return;
        }
        if($('.message').hasClass('message--opened')) {
            $('.message').removeClass('message--opened');
            $('.message__popup').fadeOut(200);
        }
        $(this).closest('.message').addClass('message--opened');
        $(this).parent().siblings('.message__popup').fadeIn(200);
    });
    userName.on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if($(this).closest('.message').hasClass('message--opened')) {
            return;
        }
        if($('.message').hasClass('message--opened')) {
            $('.message').removeClass('message--opened');
            $('.message__popup').fadeOut(200);
        }
        $(this).closest('.message').addClass('message--opened');
        $(this).closest('.message__info').siblings('.message__user-wrap')
        .find('.message__popup').fadeIn(200);
    })
    body.on('click', function(event) {
        event.stopPropagation();
        if(event.target.closest('.message__popup')) {
            return;
        }
        else {
            $('.message__popup').fadeOut(200);
            $('.message').removeClass('message--opened');
        }
    })
})
