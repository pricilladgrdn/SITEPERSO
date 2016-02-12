/**
 * Gallery v1.0
 * by Chipmunky - http://chipmunky.com/
 *
 * @license http://chipmunky.com/
 * - Free for personal and commercial use
 * - Thank you leave the author name, link and information license intact
 */

(function($) {
	$.fn.chipmunkyGallery = function(params) {
		// Params
		params = $.extend({
			classGalleryWrapper: 'chipmunkyGallery',
			keyboardControls: true,
			transitionDelais: 500
		}, params);
		
		var gallery = {
			init: function(e) {
				// Elements
				gallery.elements = $(e);
				gallery.nbElements = gallery.elements.length;
				
				// Load images
				gallery.galleryImages = [];
				gallery.elements.each(function(i, element) {
					gallery.galleryImages[i] = $(element);
					// preload
					//$('<img/>')[0].src = gallery.galleryImages[i];
					//$('<img />').attr('src', gallery.galleryImages[i]).appendTo('body').css('display','none');
				});
				
				// Keyboard control (up, down, left, right)
				if (params.keyboardControls) {
					$(document).keydown(function(e){
					    switch (e.keyCode) {
					    case 37: // left
					    case 38: // up
					    	//gallery.annimationStart();
					    	gallery.elementPrev();
					    	return false;
					    break;
					    case 39: // right
					    case 40: // down
					    	//gallery.annimationStart();
					    	gallery.elementNext();
					    	return false;
					    break;
					    }
					});
				}
				
				if (params.buttonPrev) {
					$(params.buttonPrev).click(function(){
					    gallery.elementPrev();
					});
				}
				
				if (params.buttonNext) {
					$(params.buttonNext).click(function(){
					    gallery.elementNext();
					});
				}
				
				gallery.currentElement = 0;
				
				gallery.elementSelect();
			},
			elementSelect: function() {
				// Buid image
				gallery.galleryImages[gallery.currentElement].fadeIn(params.transitionDelais).siblings().fadeOut(params.transitionDelais);
				
				if (params.infoWrapper) {
					$(params.infoWrapper).html(gallery.galleryImages[gallery.currentElement].attr('title').replace(/\\/g, ''));
					$(params.infoWrapper).attr('href', gallery.galleryImages[gallery.currentElement].data('link'));
				}
			},
			elementPrev: function() {
				if (gallery.currentElement>0) {
					gallery.currentElement = gallery.currentElement-1;
				} else {
					gallery.currentElement = gallery.nbElements-1;
				}
				gallery.elementSelect();
			},
			elementNext: function() {
				if (gallery.currentElement<gallery.nbElements-1) {
					gallery.currentElement = gallery.currentElement+1;
				} else {
					gallery.currentElement = 0;
				}
				gallery.elementSelect();
			}
		};
		
		// Init gallery
		gallery.init($(this));
		
		return this;
	};
}( jQuery ));