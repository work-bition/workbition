"use strict";

$('#main-nav .left.menu .item').click(function (event) {
  $('#main-nav .left.menu .active.item').removeClass('active');
  var element = event.currentTarget;
  $(element).addClass('active');
});