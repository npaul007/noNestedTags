function removeNestedTags(html){
	var dom = $(html);

	console.log(dom.html());

	dom.each(function(){
		$(this)[0].className 
		$(this).contents().each(function(index){
			$(this)[0].className = $(this)[0].className + ' ' + $(this).contents()[index].className;
		});
	});

	return dom.wrap('<p/>').parent().html();
}

$(document).ready(function(){
	var html ='<p><span class="bold"><span class="italic">foobar</span></span></p>';	
	console.log(removeNestedTags(html));
});