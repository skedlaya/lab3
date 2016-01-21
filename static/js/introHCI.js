'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */

function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Text Changed");
		$(".jumbotron p").toggleClass("active");
	});
	$("#submitBtn").click(projectFormUpdate);


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

 	$("a.thumbnail").click(projectClick);

}
function projectFormUpdate(e){
    var projectLabel = $('#project').val();
    $(projectLabel).animate({width: $('#width').val()});
    console.log("Project ID = " +projectLabel);  
   

   var formText = $('#description').val();
   $(projectLabel + " .project-description").text(formText);

}
function projectClick(e){
	console.log("project clicked");
 	//prevent the page from reloading
 	e.preventDefault();
 	var projectTitle = $(this).find("p").text();
 	var jumbotronHeader = $(".jumbotron h1");
 	jumbotronHeader.text(projectTitle);
 	console.log("Length of jumbotronHeader" + jumbotronHeader.length)
 	// In an event handler, $(this) refers to
 	// the object that thriggered the event
 	$(this).css("background-color","#7fff00");
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
        description.fadeToggle();
    //   description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }

 }