function removeNestedTags(html){
	var dom = $(html);

	dom.each(function(index){
		var classList = '';
	    $(this).find('span').each(function(){
	        var self = $(this);
	        if($(this).find('span').length != 1){
				classList = classList + ' ' + self[0].className;
				self.contents().unwrap();
	    	}
	    });	

	    $(this).children()[0].classList = $(this).children()[0].classList + classList
	});

	return dom;
}

$(document).ready(function(){
	var html ='<p><span class="bold"><span class="italic"><span class="underline">foobar broski</span></span></span></p><p><span class="bro"><span class="blah"><span class="yass">wtf broski</span></span></span></p>';	
	var nonNestedHTML = removeNestedTags(html);
});