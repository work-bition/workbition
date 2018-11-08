"use strict";

(function () {
  'use strict';
  /**
  * main navigation
  */

  $('#header .right.menu .ui.search.item i.search.icon').click(function (event) {
    /** making search input visible **/
    var search_input = $('#header .right.menu input.prompt')[0];
    search_input.style.visibility = 'visible';
    /** making search input get foucs **/

    search_input.focus();
    /** making login and register buttons invisible **/

    var login_button = $('#header .right.menu .login_button');
    var divider = $('#header .right.menu .divider_item');
    var register_button = $('#header .right.menu .register_button');
    login_button[0].style.display = 'none';
    divider[0].style.display = 'none';
    register_button[0].style.display = 'none';
    /** removing 'link' class via jQuery **/

    $(event.currentTarget).removeClass('link');
    /** making the close icon visible **/

    $('#header .right.menu .ui.search.item i.close.icon')[0].style.display = 'inline-block';
    /** adding class to search icon for negative margin **/

    $(event.currentTarget).addClass('negative_mg_lft');
    /** stopping the propagation **/

    event.stopPropagation();
  });
  $('#header .right.menu .ui.search.item i.close.icon').click(function (event) {
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

    $('#header .right.menu .ui.search.item i.search.icon').addClass('link');
    /* removing class from search icon for negative margin */

    $('#header .right.menu .ui.search.item i.search.icon').removeClass('negative_mg_lft');
    /* stopping the propagation */

    event.stopPropagation();
  });
  /** preventing the body click event when click on search input **/

  $('#header .right.menu .ui.search.item .prompt').click(function (event) {
    /* stopping the propagation */
    event.stopPropagation();
  });
  /** when clicking in the viewport, making the search input invisible **/

  $('body').click(function (event) {
    /* programmatically trigger close icon click event */
    $('#header .right.menu .ui.search.item i.close.icon').click();
  });
  /**
  * main search bar
  */

  /** the message that needs to be passed when there's no search result returned **/

  $.fn.search.settings.error.noResults = '抱歉～我们没找到任何能够匹配此搜索结果的课程。';
  /** the html code generated when there's no search result returned **/

  $.fn.search.settings.templates.message = function (message, type) {
    var html = '';

    if (message !== undefined && type !== undefined) {
      html += '' + '<div class="message ' + type + '">'; // when there's no result returned, the html code that should be generated

      if (type == 'empty') {
        html += '' + '<div class="header">矮油！没找到课程>_< </div class="header">' + '<br />' + '<div class="description">' + message + '</div class="description">' + '<br />' + '<div class="description"><a style="color:#2a6ea8;font-weight:bold;" href="#">告诉我们</a>您感兴趣的内容，根据反馈我们可能在未来增设相关课程。</div>';
      }
      /** other circumstances **/
      else {
          html += ' <div class="description">' + message + '</div>';
        }

      html += '</div>';
    }

    return html;
  };
  /** local search data **/


  var content = [{
    title: 'Andorra'
  }, {
    title: 'United Arab Emirates'
  }, {
    title: 'Afghanistan'
  }, {
    title: 'Antigua'
  }, {
    title: 'Anguilla'
  }, {
    title: 'Albania'
  }, {
    title: 'Armenia'
  }, {
    title: 'Netherlands Antilles'
  }, {
    title: 'Angola'
  }, {
    title: 'Argentina'
  }, {
    title: 'American Samoa'
  }, {
    title: 'Austria'
  }, {
    title: 'Australia'
  }, {
    title: 'Aruba'
  }, {
    title: 'Aland Islands'
  }, {
    title: 'Azerbaijan'
  }, {
    title: 'Bosnia'
  }, {
    title: 'Barbados'
  }, {
    title: 'Bangladesh'
  }, {
    title: 'Belgium'
  }, {
    title: 'Burkina Faso'
  }, {
    title: 'Bulgaria'
  }, {
    title: 'Bahrain'
  }, {
    title: 'Burundi'
  }];
  /** activate the search feature **/

  $('.ui.search').search({
    source: content,

    /** when closing the panel showing the results, clear search box input **/
    onResultsClose: function onResultsClose() {
      /** clear search box input **/
      $('.ui.search .prompt').val('');
    }
  });
  /**
  * sidebar
  */

  /** Resizing the height for iOS devices **/

  var resizeSidebarHeight = function resizeSidebarHeight() {
    /* resizing the height of the sidebar when the ios device is detected */
    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
      $('.ui.sidebar .content_wrapper').css('height', $(window).height());
    }
  };
  /** When chaging the orientation of the devices, closing the sidebar **/


  $(window).on('orientationchange', function (event) {
    /* making the sidebar invisible */
    $('.ui.sidebar .close_layer a').click();
  });
  /** toggling the display of the sidebar **/

  $('.ui.sidebar').sidebar({
    transition: 'overlay',
    mobileTransition: 'overlay',
    dimPage: false,
    onVisible: function onVisible() {
      /** Resizing the height for iOS devices **/
      resizeSidebarHeight();
      /** when opening the sidebar, preventing the body layer from moving **/

      $('body').addClass('fixed_layer');
    },
    onHidden: function onHidden() {
      /** when closing the sidebar, releasing the original state of the body layer **/
      $('body').removeClass('fixed_layer');
    }
  }).sidebar('attach events', '#header .right.menu .menu_button .align.justify.icon');
  /** making the sidebar invisible **/

  $('.ui.sidebar .close_layer a').click(function (event) {
    $('.ui.sidebar').sidebar('hide');
  });
})();