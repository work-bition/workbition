import enquire from  'enquire.js'

import '../../dist/semantic-ui/semantic.min.js'

import 'slick-carousel'

import superplaceholder from  'superplaceholder'

(function(){

   'use strict'

   /*****************************************************************************************************************************

                                                           Helpers

   ******************************************************************************************************************************/

   /** Mobile Device and IE11 Detection **/

   /** detecting if it is iOS or Android devices **/
   let u = navigator.userAgent

   //iOS devices
   let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

   //Android devices
   let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1

   /** detecting if it is IE11 browser **/
   let isIE11 = false

   if (window.matchMedia("screen and (-ms-high-contrast: active), (-ms-high-contrast: none)").matches) {

     isIE11 = true

   }





   /*****************************************************************************************************************************

                                                           Header

   ******************************************************************************************************************************/

   /**
   * header - account modal
   **/
   $('#account_modal')

     .modal({

       closable: false,

       transition: 'fade up'

     })

     .modal('attach events', '#header .register.button', 'show')

     .modal('attach events', '#header .login.button', 'show')

     $('#account_modal .close_button').click(() => {

       $('#account_modal')

        .modal('hide')

     })



   /**
   * header - search bar
   **/

   /** When using Chinese input, do not show search results before Chinese characters are spell out **/

   /** flag showing whether Chinese characters are spell out **/
   let chineseInput_flag = true

   /** This event indicates that the alphabetic characters used for spelling Chinese words has been typed, **/
   /** but Chinese words are not generated **/
   $('#header .right.menu .ui.search input.prompt').on('compositionstart',function(){

       /** the state of combining Chinese words is not finished **/
       chineseInput_flag = false

   })

   /** This event indicates that the alphabetic characters used for spelling Chinese words has been typed, **/
   /** and all the relative Chinese words are generated **/
   $('#header .right.menu .ui.search input.prompt').on('compositionend',function(){

      /** the state of combining Chinese words is finished **/
       chineseInput_flag = true

   })

   /** the message that needs to be passed when there's no search result returned **/
   $.fn.search.settings.error.noResults = '抱歉～您的搜索没匹配到任何结果。'

   /** the html code generated when there's no search result returned **/
   $.fn.search.settings.templates.message = (message, type) => {

     let html = ''

     if( message !== undefined && type !== undefined ) {

       html +=  ''

         + '<div class="message ' + type + '">'

       // when there's no result returned, the html code that should be generated
       if( type == 'empty' ) {

         html += ''

           + '<div class="header">没找到“<span>' + $('#header .right.menu .ui.search').search('get value') + '</span>”的搜索结果</div>'

           + '<br />'

           + '<div class="description">' + message + '</div>'

           + '<br />'

           + '<div class="description"><a href="http://www.pingwest.com">告诉我们</a>您感兴趣的话题，根据反馈，我们有可能在将来增加相关的内容。</div>'

       }

      /** other circumstances **/
       else {

         html += ' <div class="description">' + message + '</div>'

       }

       html += '</div>'

     }

     return html

   }

   /** local search data **/
   let content = [

     { title: '还要啥男朋友？！白领自拍指南' },
     { title: '不学你就out啦！财务工作必须掌握的20个Excel函数' },
     { title: '1Password——密码管理的终极解决方案' },
     { title: '5分钟设计出Excel的花式图表' },
     { title: '精通Word排版艺术' },
     { title: 'Word PowerPoint Excel基础教程' },
     { title: 'Armenia' },
     { title: 'Netherlands Antilles' },
     { title: 'Angola' },
     { title: 'Argentina' },
     { title: 'American Samoa' },
     { title: 'Austria' },
     { title: 'Australia' },
     { title: 'Aruba' },
     { title: 'Aland Islands' },
     { title: 'Azerbaijan' },
     { title: 'Bosnia' },
     { title: 'Barbados' },
     { title: 'Bangladesh' },
     { title: 'Belgium' },
     { title: 'Burkina Faso' },
     { title: 'Bulgaria' },
     { title: 'Bahrain' },
     { title: 'Burundi' }

   ]

   /** activate the search feature **/
   $('#header .right.menu .ui.search')

     .search({

       source: content,

       fullTextSearch: true,

       transition: 'fade',

       maxResults: 10,

       onResultsOpen: () => {

         $('#main_content .page_banners')[0].style.zIndex = -1

         $('#main_content .page_banners')[0].style.zIndex = -1

       },

       onResultsClose: () => {

         $('#main_content .page_banners')[0].style.zIndex = 'auto'

         $('#main_content .page_banners')[0].style.zIndex = 'auto'

       },

       onSearchQuery: (query) => {

         if($.trim(query)==='') {

           $('#header .right.menu .ui.search .results').addClass('hide_results')

         }

         else {

           setTimeout(function(){


               /** if the state of combining Chinese words is not finished, do not show any search results **/
               if(!chineseInput_flag){

                 $('#header .right.menu .ui.search .results').addClass('hide_results')

               }

               /** if the state of combining Chinese words is finished, showing the relative search results **/
               else {

                 $('#header .right.menu .ui.search .results').removeClass('hide_results')

                 $('#header .right.menu .ui.search').search('search local', $.trim(query))

               }

           }, 0)

         }

       }

     })

   /** when clicking on the search icon, make the search box visible **/
   $('#header .right.menu .ui.search i.search.icon').click((event) => {

     /** if Android devices are detected, making the close icon a little bit larger **/
     /** the reason why doing this is because the small close icon on Android devices is very hard to click **/

     if (isAndroid) {

       /** the 'large' class can make the icon become large **/
       $('#header .right.menu .ui.search .close.icon').addClass('large')

       /** making the close icon in the correct position after adjusting its size **/
       $('#header .right.menu .ui.search .close.icon')[0].style.transform = 'translateY(-0.05rem)'

     }

     /** making search box visible **/

     let search_input = $('#header .right.menu .ui.search input.prompt')[0]

     search_input.style.visibility = 'visible'

     /** making search input get foucs **/
     if (!isIE11) {

       search_input.focus()

     }



     /** making login and register buttons invisible **/

     let login_button = $('#header .right.menu .login.button')

     let divider = $('#header .right.menu .divider_item')

     let register_button = $('#header .right.menu .register_button')

     login_button[0].style.display='none'

     divider[0].style.display='none'

     register_button[0].style.display='none'

     /** removing 'link' class via jQuery **/

     $(event.currentTarget).removeClass('link')

     /** making the close icon visible **/

     $('#header .right.menu .ui.search i.close.icon')[0].style.display = 'inline-block'

     /** adding class to search icon for negative margin **/

     $(event.currentTarget).addClass('negative_mg_lft')

     /** stopping the propagation **/

     event.stopPropagation()



   })

   /** when click on the close icon, closing the search results panels in two steps **/
   $('#header .right.menu .ui.search i.close.icon').click((event) => {

     /** if search results panel is open, just close it and do nothing else **/
     if ($('#header .right.menu .ui.search').search('is visible')) {

       $('#header .right.menu .ui.search').search('hide results')

       /** clear the input in the search box **/
       $('#header .right.menu .ui.search input.prompt').val('')

     }

     /** if search results panel is not open, make the search box invisble **/
     else {

       /* making search input invisible */

       let search_input = $('#header .right.menu .ui.search input.prompt')[0]

       search_input.style.visibility = 'hidden'

       search_input.style.width = '0'

       /* making close icon invisible */

       let close_icon = event.currentTarget

       close_icon.style.display = 'none'

       /* making login and register buttons visible */

       let login_button = $('#header .right.menu .login.button')

       let divider = $('#header .right.menu .divider_item')

       let register_button = $('#header .right.menu .register_button')

       login_button[0].style.display='inline-block'

       divider[0].style.display='inline-block'

       register_button[0].style.display='inline-block'

       /* adding 'link' class to search icon via jQuery */
       $('#header .right.menu .ui.search i.search.icon').addClass('link')

       /* removing class from search icon for negative margin */
       $('#header .right.menu .ui.search i.search.icon').removeClass('negative_mg_lft')

     }

   })

   /** preventing the body click event when click on search input **/
   $('#header .right.menu .ui.search .prompt').click((event) => {

     /* stopping the propagation */
     event.stopPropagation()

   })

   /** When the keyboard is close, resize the height of the sidebar for Android devices **/
   $('#header .right.menu .ui.search .prompt').blur(function(){

     if (isAndroid) {

       /** delay the display of the sidebar after resizing the height of it **/
       /** the reason why doing this is becasue only when the keyboard is close can you resize the height of the sidebar **/
       setTimeout("$('#main_sidebar .content_wrapper').css('height', $(window).height())", 200)

     }

   })

   /** when clicking the menu button, making the search bar invisible **/
   $('#header .right.menu .menu_button .align.justify.icon').click((event) => {

     /* making search input invisible */

     let search_input = $('#header .right.menu .ui.search input.prompt')[0]

     search_input.style.visibility = 'hidden'

     search_input.style.width = '0'

     /* making close icon invisible */

     let close_icon = $('#header .right.menu .ui.search .close.icon')[0]

     close_icon.style.display = 'none'

     /* making login and register buttons visible */

     let login_button = $('#header .right.menu .login.button')

     let divider = $('#header .right.menu .divider_item')

     let register_button = $('#header .right.menu .register_button')

     login_button[0].style.display='inline-block'

     divider[0].style.display='inline-block'

     register_button[0].style.display='inline-block'

     /* adding 'link' class to search icon via jQuery */
     $('#header .right.menu .ui.search i.search.icon').addClass('link')

     /* removing class from search icon for negative margin */
     $('#header .right.menu .ui.search i.search.icon').removeClass('negative_mg_lft')

   })

   /** when clicking in the viewport, making the search input get focus **/
   $('body').click((event) => {


     /** clear the input in the search box **/
     $('#header .right.menu .ui.search input.prompt').val('')

     /** making search input get foucs **/
     let search_input = $('#header .right.menu .ui.search input.prompt')[0]

     /** in IE11, when the input is focused, placeholder can not be displayed **/
     if (!isIE11) {

       search_input.focus()

     }

    })

   /** hiding results panel of the search box  when clicking on it **/
   $('#header .right.menu .ui.search .results').click((event) => {

     /** hiding the results panel of the search bar **/
     $('#header .right.menu .ui.search').search('hide results')

     /** making search input get foucs **/
     let search_input = $('#header .right.menu .ui.search input.prompt')[0]

     /** clear the input **/
     $(search_input).val('')

     search_input.focus()

     /* stopping the propagation */
     event.stopPropagation()

   })

   /** Solve the problem of when the 'esc' key is pressed, SUI search component does not work **/
   $(window).on('keyup', function(evt){

     if ( evt.which == 27 ) {

       $(".prompt").blur()

       $('#header .right.menu .ui.search i.close.icon').click()

     }

   })

   /** Dynamic Input Placeholder Display **/
   let searchQueries = [

     '自拍, 修图, 调色',

     'Word, Excel, PPT',

     '1Password, Money Pro, MindNode',

     '社群营销, 公众号引流'

   ]

   superplaceholder({

    el: document.querySelector('#header .right.menu .ui.search input.prompt'),

    sentences: searchQueries,

     options: {

       loop: true,

       letterDelay: 50,

       sentenceDelay: 1500,

       startOnFocus: false,

       shuffle: true

     }

   })



   /**
   * header - sidebar
   **/

   /** Clone Some Html Codes for Reducing the Page Size **/
   /** Cloning the logo section into sidebar **/
   $('#header .logo_section a.logo_link')

      .clone()/** optional parameter: includeEvents **/

      .appendTo('#main_sidebar section.sidebar_header')

   /** Cloning the items of the main navigation into sidebar **/
   $('#main_nav .left.menu a.item')

      .clone()/** optional parameter: includeEvents **/

      .appendTo('#main_sidebar section.ui.menu ul')

      .wrap('<li></li>')

   /** Cloning the register button into sidebar **/
   $('#header .right.menu .register_button')

      .clone()/** optional parameter: includeEvents **/

      .appendTo('#main_sidebar .ui.menu .login_register_buttons')

   /** Resizing the height for iOS and Android devices **/
   let resizeSidebarHeight = function(){

     /* resizing the height of the sidebar when the ios device is detected */
     if ( isiOS || isAndroid ) {

       $('#main_sidebar .content_wrapper').css('height', $(window).height())

     }

   }

   /** When chaging the orientation of the devices, closing the sidebar **/
   $(window).on('orientationchange', function(event) {

     /* making the sidebar invisible */
     $('#main_sidebar .close_layer a').click()

     /** making the results panel of the search box to be close **/
     $('#header .right.menu .ui.search').search('hide results')

   })

   /** toggling the display of the sidebar **/
   $('#main_sidebar')

    .sidebar({

      transition: 'overlay',

      mobileTransition: 'overlay',

      dimPage: false,

      onVisible: () => {

        /** Resizing the height for iOS devices **/
        resizeSidebarHeight()

        /** when opening the sidebar, preventing the body layer from moving **/
        $('body').addClass('fixed_layer')

      },

      onHidden: () => {

        /** when closing the sidebar, releasing the original state of the body layer **/
        $('body').removeClass('fixed_layer')

      }

    })

    .sidebar('attach events', '#header .right.menu .menu_button .align.justify.icon')

    /** making the sidebar invisible **/
    $('#main_sidebar .close_layer a').click((event) => {

      $('#main_sidebar')

       .sidebar('hide')

    })


    /** when the width of the screen is greater than 768px, close the sidebar if it is open **/
    enquire.register("screen and (min-width: 768px)", {

      match() {

        if ( $('#main_sidebar').sidebar('is visible') ) {

          $('#main_sidebar .close_layer a').click()

        }

      }

    })






    /*****************************************************************************************************************************

                                                            Page Banners

    ******************************************************************************************************************************/

    /**
    * Page Banners - Main Banner(featured carousel)
    **/

    /** Solve the problem that the images after the first one show out there out of the carousel area **/
    /** befre the slick component takes effect when you refresh the page in the Chrome browser **/
    $(document).ready(function() {

      $('.featured_carousel .image_holder').css('visibility', 'visible');

      $('#main_content .page_banners').css('box-shadow', '0 8px 24px 0 rgba(82,94,102,.15)');

      $('#main_content .page_banners .corner_banners .corner_banner').css('visibility', 'visible');

    })

    /** Activating the functionality of the featured carousel with the customized previous and next arrow indicators **/
    $('.featured_carousel').slick({

        autoplay: true,

        autoplaySpeed: 2000,

        fade: true,

        dots: true,

        prevArrow: '<button type="button" class="prev circular ui icon button"><i class="chevron left icon"></i></button>',

        nextArrow: '<button type="button" class="next circular ui icon button"><i class="chevron right icon"></i></button>'

    })

    /** Fix the problem that the arrows doesn't fade out, **/
    /** when the mouse hovers on the carousel area, navigation dots and left and right arrows, making the left and right arrows showing out there with fade animation effects **/
    /** and make the color of the overlay on the slick slides change between lighter and darker **/
    function moveNavButtons_setOverlay(disToMove, buttonOpacity, overlayOpacity){

      $('.featured_carousel .prev.button').css({

        'transform': `translate(${disToMove}, -50%)`,
        'opacity': `${buttonOpacity}`

      })

      $('.featured_carousel .next.button').css({

        'transform': `translate(-${disToMove}, -50%)`,
        'opacity': `${buttonOpacity}`

      })

      $('.featured_carousel .slick-list .slick-slide .image_holder .overlay').css({

        'opacity': `${overlayOpacity}`

      })

    }

    let initialMainBannerOverlay = $('#main_content .page_banners .main_banner .overlay').css('opacity')

    $('.featured_carousel .slick-list, .featured_carousel .prev.button, .featured_carousel .next.button, .featured_carousel .slick-dots').hover(

      /** When the mouse enters into the carousel area, making the arrows fade in **/
      () => {

        moveNavButtons_setOverlay('1.2rem', 1, 0.05)

      },

      /** When the mouse leaves the carousel area, making the arrows fade out **/
      () => {

        moveNavButtons_setOverlay('0.4rem', 0, initialMainBannerOverlay)

      }

    )



    /**
    * Page Banners - Corner Banners
    **/

    /** When hovering on the corner banner, chaging the shape of the image in it by using CSS commands **/
    $('#main_content .corner_banners .corner_banner').hover(

      /** When the mouse enters into the corner banner area, turning the shape of the image into cornered square from circle **/
      (event) => {

        $(event.currentTarget).find('.card_image').css({

          'border-radius': '15%'

        })

      },

      /** When the mouse leave the corner banner area, turning the shape of the image into circle from cornered square **/
      (event) => {

        $(event.currentTarget).find('.card_image').css({

          'border-radius': '50%'

        })

      }

    )

})()
