/*
 * jAccordion Plugin
 * http://github.com/JArment/jQuery-jAccordion
 *
 * Copyright (c) 2010 Jim Arment (http://jarment.com)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 0.1
 *
 * Example usage:
 * $('.accordion').jAccordion({
 *   activePanel: 0, zero would be the first panel
 *   headingTag: 'h3', 
 * });
 */ 
(function($){
	$.fn.jAccordion = function(options){
		var
			//Create default properties
			defaults = {
				//If no activePanel is identified, plugin will default to the first panel
				activePanel: 0,
				//If not specified, the defualt heading tag will be h3
				headingTag: 'h3'
			},
			//Combine default properties with the user-specified properties
			settings = $.extend(defaults, options);
			
		this.each(function(){
			var $this = $(this);
			
			//Assign the active panel as the first element
			$this.find('.panel').eq(settings.activePanel).addClass('active');
			//Hide all panels that are not active
			$this.find('.panel:not(.active) *').not(settings.headingTag).hide();

			$this.find(settings.headingTag).click(function(){
				//Hide content of the previously active panel
				$this.find('.active *').not(settings.headingTag).hide();
				//Remove the "active" class from all the panel
				$this.find('.active').removeClass('active');
				
				//Assign the active panel with a class of "active"
				$(this).parent().addClass('active');
				//Display all content in the active panel
				$this.find('.active *').show();
			});
		});		
		
		//Return the jQuery object to allow for chainability
		return this;
	}
})(jQuery);