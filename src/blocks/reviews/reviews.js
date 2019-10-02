import $ from "jquery";
import "owl.carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';

window.addEventListener("load",function(){
    let reviews = $(".reviews__slader")
    reviews.owlCarousel({
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            640:{
                items:2
            },
            980:{
                items:3

            }
        },
        loop:true,
        nav:true,
        dots:false,
    })
})