import $ from "jquery";
$(window).on("load",function(){
    $('.faq .faq__item__question').on('click', function(){
        // console.log(2)
        $(this).next().stop(true).slideToggle(300);
        // $answers.not($curAnswer).slideUp(300);
    });
})
