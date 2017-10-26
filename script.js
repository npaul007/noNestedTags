function removeNestedTags(html){
	var dom = $(html);

	dom.each(function(index){
		var classList = '';
		var attr;
	    $(this).find('span').each(function(){
	        var self = $(this);

	        if($(this).find('span').length != 1){
				classList = classList + ' ' + self[0].className;

				if(self[0].attributes.data)
	        		attr = self[0].attributes.data.value;

				self.contents().unwrap();
	    	}
	    });	

	    $(this).children()[0].classList = $(this).children()[0].classList + classList
	    $(this).children().attr('data',attr);
	});

	return dom;
}

$(document).ready(function(){
	var html ='<p><span class="bold"><span class="italic"><span class="underline color" data="#fffff">foobar broski</span></span></span></p><p><span class="bro"><span class="blah"><span class="yass color" data="#fffff">wtf broski</span></span></span></p>';	
	var nonNestedHTML = removeNestedTags(html);
	console.log(nonNestedHTML[0]);
	console.log(nonNestedHTML[1]);
});