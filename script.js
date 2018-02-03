//jQuery version
$(document).ready(function(){

	var css = $("h3");
	var color1 = $(".color1");
	var color2 = $(".color2");
	var body = $("#gradient");

	function setGradient() {
		body.css('background', 'linear-gradient(to right, ' 
		+ color1.val() 
		+ ', ' 
		+ color2.val()
		+ ')');

		css.text('Background color = ' + body.css('background'));
	}

	color1.on("input", setGradient);
	color2.on("input", setGradient);

});

// //Javascript version
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);
