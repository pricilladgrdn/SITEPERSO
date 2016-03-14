var tmp = 1;
function next(i) {
	tmp++;
	if(tmp == i+1)
		tmp = 1;
	$('#img' + tmp).css('z-index', 1).siblings().css('z-index', -1);
}

$(document).keydown(function(e){
	switch (e.which){
		case 37: window.location.href = "projet_standjpo.html"; break; //lien du projet d'avant
		case 39: window.location.href = "projet_germinal.html"; break; // lien du projet d'après
	}
});