/*	CitrusSystem - Share
	Create on 2011-12-03 by Lenny
---------------------------------------------------------------------- */
function openPopup(e)
{
	window.open(e.href,'sharer','toolbar=0,status=0,width=626,height=436');
	return false;
}

function modalOpen(e)
{
	var modal = $('#'+e).prependTo('body').slideDown(250);
}

function modalClose(e)
{
	$('#'+e).slideUp(150);
}

function centerBloc(e, mode)
{
	var p = $(e);
	var menuHeight = $('#menuWrapper').height();
	var h = Math.abs(Math.round(($(window).height()-menuHeight-p.height()/*-(parseInt(p.css(mode+'-top'))+parseInt(p.css(mode+'-bottom')))*/)/2));
	p.css(mode+'-top', h+menuHeight);
	p.css(mode+'-bottom', h);
	//$('#test').text(mode+'-top : '+p.css(mode+'-top')+' / padding : '+h);
}

function scrollToElement(e)
{
	$('html, body').animate({
		scrollTop: $(e).offset().top
	}, 1000, 'swing');
}

function link(url)
{
	document.location.href = url;
}