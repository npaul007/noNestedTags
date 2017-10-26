function removeNestedTags(html){
	var dom = $(html);
	var classList = '';

    dom.find('span').each(function(){
        var self = $(this);
        if(dom.find('span').length > 1){
			classList = classList + ' ' + self[0].className;
			self.contents().unwrap();
    	}
    });

    dom.children()[0].classList = dom.children()[0].classList + classList;
	return dom[0],dom[1];
}

$(document).ready(function(){
	var html ='<p><span class="bold"><span class="italic"><span class="underline">foobar broski</span></span></span></p><p><span class="bold"><span class="italic"><span class="underline">foobar broski</span></span></span></p>';	
	console.log(removeNestedTags(html));
});