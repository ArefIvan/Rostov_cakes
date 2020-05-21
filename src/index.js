import './scss/main.scss';

import Instafeed from "instafeed.js";
// import "./blocks/header/header"
import "./blocks/slide/slide"
import "./blocks/faq/faq"
import "./blocks/tasteCard/tasteCard"
import "./blocks/design/design"
import "./blocks/reviews/reviews"
import "./blocks/modal/modal"
import "./blocks/weightCalc/weightCalc"
import "./js/jquery.fittext"


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

let wdgcrdList= $(".weddingCard__text")


wdgcrdList.each(function(){
	$(this).fitText(
		1.2
	)
})




