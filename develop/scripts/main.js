
$('#main-nav .left.menu .item').click((event) => {

  $('#main-nav .left.menu .active.item').removeClass('active')

  let element = event.currentTarget

  $(element).addClass('active')

})
