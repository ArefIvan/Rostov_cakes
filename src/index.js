import './scss/main.scss';
import $ from "jquery";
import "owl.carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import Instafeed from "instafeed.js";
import "./blocks/header/header"
import "./blocks/faq/faq"
import "./blocks/tasteCard/tasteCard"
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
window.onload = function(){
	var feed = new Instafeed({
		target:"instafeed",
		get:'user',
		userId:'3017297723',
		clientId: '8290f2300d2640b095524e94c00757ca',
		accessToken:'3017297723.8290f23.d0a82ee5314d4f1494f0b4c879567ded',
		limit:'6',
		template:'<div class="widget__img"><a target="_blank" href="{{link}}"><img src="{{image}}" /></a></div>'

	});
	feed.run();
};