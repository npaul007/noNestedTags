$(document).ready(function(){
	var html ='<p><span class="bold"><span class="italic">foobar</span></span></p>';
	console.log(html);

	var dom = $(html);

	console.log(dom.html());
});