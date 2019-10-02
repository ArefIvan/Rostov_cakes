import $ from "jquery";
import "owl.carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';

window.addEventListener("load",function(){
    let slider = $(".slider--main")
    slider.owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
    }).find(".owl-item").not(".active").find(".button").attr("tabindex","-1")
    slider.on("changed.owl.carousel").find(".active").find(".button").attr("tabindex","0")
    slider.on("changed.owl.carousel",function(){
        console.log($(this).find(".active"))
    })
})