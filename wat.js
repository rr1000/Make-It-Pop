$(document).ready(function(){
	console.log('Ready!');
	var boring = $('#boringshit');
	var popit = $('#popthatshit');
	var boreit = $('#makeitboring');
	popit.click(function(){
		boring.addClass('excitingasfuck');
	});
	boreit.click(function(){
		boring.removeClass('excitingasfuck');
	});
});