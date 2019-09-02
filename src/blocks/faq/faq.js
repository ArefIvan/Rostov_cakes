$('.faq .faq__item__question').on('click', function(){
    var $curAnswer = $(this).next().stop(true).slideToggle(300);
    $answers.not($curAnswer).slideUp(300);
});