$(document).ready(function(){
	// disable auto discover
	Dropzone.autoDiscover = false;

	// grap our upload form by its id
	$("#new_post").dropzone({
		// restrict image size to a maximum 1MB
		maxFilesize: 6,
		// changed the passed param to one accepted by
		// our rails app
		paramName: "post[picture]",
		// show remove links on each image upload
		addRemoveLinks: true
	});	
});