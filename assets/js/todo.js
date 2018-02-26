// mark what has been done or return to undo
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

// delete todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(550, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add todos
$("input[type=text]").keypress(function(event){
	if(event.which === 13){
		// get new todos
		var newTodoText = $(this).val();
		// remove input text
		$(this).val("");
		// add into list
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodoText + "</li>")
	}
});

// show or hide add area
$(".fa-plus-square").on("click", function(){
	$("input[type=text]").fadeToggle();
})