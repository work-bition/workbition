'use strict'

/**
* main navigation
*/

$('#header .right.menu .ui.category.search.item i.search.icon').click((event) => {

  /* making search input visible */

  let search_input = event.currentTarget.parentElement.children[1]

  search_input.style.visibility = 'visible'

  if ( $(window).width() <= 768 ) {

    search_input.style.width = '20rem'

    alert($(window).width())

  }

  else {

    search_input.style.width = '35rem'

  }


  /* making login and register buttons invisible */

  let login_button = $('#header .right.menu .login_button')

  let divider = $('#header .right.menu .divider_item')

  let register_button = $('#header .right.menu .register_button')

  login_button[0].style.display='none'

  divider[0].style.display='none'

  register_button[0].style.display='none'

  /* removing 'link' class via jQuery */

  $(event.currentTarget).removeClass('link')

  /* making the close icon visible */

  $('#header .right.menu .ui.category.search.item i.close.icon')[0].style.display = 'inline-block'

  /* adding class to search icon for negative margin */

  $(event.currentTarget).addClass('negative_mg_lft')

  /* stopping the propagation */

  event.stopPropagation()



})


$('#header .right.menu .ui.category.search.item i.close.icon').click((event) => {

  /* making search input invisible */

  let search_input = event.currentTarget.parentElement.children[0].children[1]

  search_input.style.visibility = 'hidden'

  search_input.style.width = '0'

  /* making close icon invisible */

  let close_icon = event.currentTarget

  close_icon.style.display = 'none'

  /* making login and register buttons visible */

  let login_button = $('#header .right.menu .login_button')

  let divider = $('#header .right.menu .divider_item')

  let register_button = $('#header .right.menu .register_button')

  login_button[0].style.display='inline-block'

  divider[0].style.display='inline-block'

  register_button[0].style.display='inline-block'

  /* adding 'link' class to search icon via jQuery */

  $('#header .right.menu .ui.category.search.item i.search.icon').addClass('link')

  /* removing class from search icon for negative margin */

  $('#header .right.menu .ui.category.search.item i.search.icon').removeClass('negative_mg_lft')

  /* stopping the propagation */

  event.stopPropagation()

})

/* preventing body click event when click on search input */

$('#header .right.menu .ui.category.search.item .prompt').click((event) => {

  /* stopping the propagation */

  event.stopPropagation()

});


/* when clicking in the viewport, making the search input invisible */

$('body').click((event) => {

  /* programmatically trigger close icon click event */
  $('#header .right.menu .ui.category.search.item i.close.icon').click()

});
