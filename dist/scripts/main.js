"use strict";

(function () {
  'use strict';
  /**
  * main navigation
  */

  $('#header .right.menu .ui.category.search.item i.search.icon').click(function (event) {
    /* making search input visible */
    var search_input = $('#header .right.menu input.prompt')[0];
    search_input.style.visibility = 'visible';
    /* making login and register buttons invisible */

    var login_button = $('#header .right.menu .login_button');
    var divider = $('#header .right.menu .divider_item');
    var register_button = $('#header .right.menu .register_button');
    login_button[0].style.display = 'none';
    divider[0].style.display = 'none';
    register_button[0].style.display = 'none';
    /* removing 'link' class via jQuery */

    $(event.currentTarget).removeClass('link');
    /* making the close icon visible */

    $('#header .right.menu .ui.category.search.item i.close.icon')[0].style.display = 'inline-block';
    /* adding class to search icon for negative margin */

    $(event.currentTarget).addClass('negative_mg_lft');
    /* stopping the propagation */

    event.stopPropagation();
  });
  $('#header .right.menu .ui.category.search.item i.close.icon').click(function (event) {
    /* making search input invisible */
    var search_input = $('#header .right.menu input.prompt')[0];
    search_input.style.visibility = 'hidden';
    search_input.style.width = '0';
    /* making close icon invisible */

    var close_icon = event.currentTarget;
    close_icon.style.display = 'none';
    /* making login and register buttons visible */

    var login_button = $('#header .right.menu .login_button');
    var divider = $('#header .right.menu .divider_item');
    var register_button = $('#header .right.menu .register_button');
    login_button[0].style.display = 'inline-block';
    divider[0].style.display = 'inline-block';
    register_button[0].style.display = 'inline-block';
    /* adding 'link' class to search icon via jQuery */

    $('#header .right.menu .ui.category.search.item i.search.icon').addClass('link');
    /* removing class from search icon for negative margin */

    $('#header .right.menu .ui.category.search.item i.search.icon').removeClass('negative_mg_lft');
    /* stopping the propagation */

    event.stopPropagation();
  });
  /* preventing the body click event when click on search input */

  $('#header .right.menu .ui.category.search.item .prompt').click(function (event) {
    /* stopping the propagation */
    event.stopPropagation();
  });
  /* when clicking in the viewport, making the search input invisible */

  $('body').click(function (event) {
    /* programmatically trigger close icon click event */
    $('#header .right.menu .ui.category.search.item i.close.icon').click();
  });
  /**
  * sidebar
  */

  /* toggling the display of the sidebar */

  $('.ui.sidebar').sidebar({
    transition: 'overlay',
    mobileTransition: 'overlay'
  }).sidebar('attach events', '#header .right.menu .menu_button .align.justify.icon');
  /* making the sidebar invisible */

  $('.ui.sidebar .close_layer a').click(function (event) {
    $('.ui.sidebar').sidebar('hide');
  });
})();