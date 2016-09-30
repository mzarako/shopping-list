
//creates a state object for data storage
var state = {
	items: []
};



var addItem = function(state, item) {
	state.items.push(item);
};


var renderList = function(state, element) {

	var newItem = '<li><span class="shopping-item">' + state.items[state.items.length-1] + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">';
	  newItem += 'check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';

	element.append(newItem);
};


var deleteItem = function(state, item) {
	var itemIndex = state.items.indexOf(item);
	state.items.splice(itemIndex, 1);
};



$(document).ready(function() {

	//event listener: add new item
	$('#js-shopping-list-form').submit(function(event) {
		event.preventDefault();
		addItem(state, $('#shopping-list-entry').val());
		renderList(state, $('.shopping-list'));
	});

	//remove item 
	$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
		event.preventDefault();
		deleteItem(state, $(this).closest('li').find('.shopping-item').text());
		$(this).closest('li').remove();
	});

	//check/uncheck item
	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
		event.preventDefault();
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	});

});



	  
	  