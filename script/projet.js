var tmp = 1;
function next(i) {
	tmp++;
	if(tmp == i+1)
		tmp = 1;
	$('#img' + tmp).css('z-index', 1).siblings().css('z-index', -1);
}