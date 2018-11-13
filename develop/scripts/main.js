(function(){

  'use strict'

   /**
   * main navigation
   */

   /**
   * main search bar
   */
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

           + '<div class="header">没找到结果 </div class="header">'

           + '<br />'

           + '<div class="description">' + message + '</div class="description">'

           + '<br />'

           + '<div class="description"><a style="color:#2a6ea8;font-weight:bold;" href="http://www.pingwest.com">告诉我们</a>您感兴趣的话题，根据反馈，我们可能在将来增加相关的内容。</div>'

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

     { title: 'Andorra' },
     { title: 'United Arab Emirates' },
     { title: 'Afghanistan' },
     { title: 'Antigua' },
     { title: 'Anguilla' },
     { title: 'Albania' },
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
   $('.ui.search')

     .search({

       source: content,

       onSearchQuery: (query) => {

         if($.trim(query)==='') {

           $('.ui.search .results').addClass('hide_results')

         }

         else {

           $('.ui.search .results').removeClass('hide_results')

           $('.ui.search').search('search local', $.trim(query))

         }

       }

     })

   /** when clicking on the search icon, make the search box visible **/
   $('#header .right.menu .ui.search.item i.search.icon').click((event) => {

     /** making search box visible **/

     let search_input = $('#header .right.menu input.prompt')[0]

     search_input.style.visibility = 'visible'

     /** making search input get foucs **/

     search_input.focus()

     /** making login and register buttons invisible **/

     let login_button = $('#header .right.menu .login_button')

     let divider = $('#header .right.menu .divider_item')

     let register_button = $('#header .right.menu .register_button')

     login_button[0].style.display='none'

     divider[0].style.display='none'

     register_button[0].style.display='none'

     /** removing 'link' class via jQuery **/

     $(event.currentTarget).removeClass('link')

     /** making the close icon visible **/

     $('#header .right.menu .ui.search.item i.close.icon')[0].style.display = 'inline-block'

     /** adding class to search icon for negative margin **/

     $(event.currentTarget).addClass('negative_mg_lft')

     /** stopping the propagation **/

     event.stopPropagation()



   })

   /** when click on the close icon, closing the search results panels in two steps **/
   $('#header .right.menu .ui.search.item i.close.icon').click((event) => {

     /** if search results panel is open, just close it and do nothing else **/
     if ($('.ui.search').search('is visible')) {

       $('.ui.search').search('hide results')

       /** clear the input in the search box **/
       $('.ui.search .prompt').val('')

     }

     /** if search results panel is not open, make the search box invisble **/
     else {

       /* making search input invisible */

       let search_input = $('#header .right.menu input.prompt')[0]

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
       $('#header .right.menu .ui.search.item i.search.icon').addClass('link')

       /* removing class from search icon for negative margin */
       $('#header .right.menu .ui.search.item i.search.icon').removeClass('negative_mg_lft')

     }

   })

   /** preventing the body click event when click on search input **/
   $('#header .right.menu .ui.search.item .prompt').click((event) => {

     /* stopping the propagation */
     event.stopPropagation()

   })

   /** when clicking in the viewport, making the search input get focus **/
   $('body').click((event) => {


     /** clear the input in the search box **/
     $('.ui.search .prompt').val('')

     /** making search input get foucs **/
     let search_input = $('#header .right.menu input.prompt')[0]

     search_input.focus()

    })

   /** hiding results panel of the search box  when clicking on it **/
   $('.ui.search .results').click((event) => {

     /** hiding the results panel of the search bar **/
     $('.ui.search').search('hide results')

     /** making search input get foucs **/
     let search_input = $('#header .right.menu input.prompt')[0]

     search_input.focus()

     /* stopping the propagation */
     event.stopPropagation()

   })



   /**
   * main sidebar
   */

   /** Resizing the height for iOS and Android devices **/
   let resizeSidebarHeight = function(){

     let u = navigator.userAgent

     //iOS devices
     let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

     //Android devices
     let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1

     /* resizing the height of the sidebar when the ios device is detected */
     if ( isiOS || isAndroid ) {

       $('.ui.sidebar .content_wrapper').css('height', $(window).height())

     }

   }

   /** When chaging the orientation of the devices, closing the sidebar **/
   $(window).on('orientationchange', function(event) {

     /* making the sidebar invisible */
     $('.ui.sidebar .close_layer a').click()

     /** making the results panel of the search box to be close **/
     $('.ui.search').search('hide results')

   })

   /** toggling the display of the sidebar **/
   $('.ui.sidebar')

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
    $('.ui.sidebar .close_layer a').click((event) => {

      $('.ui.sidebar')

       .sidebar('hide')

    })


    /** when the width of the screen is greater than 768px, close the sidebar if it is open **/
    enquire.register("screen and (min-width: 768px)", {

      match() {

        if ( $('.ui.sidebar').sidebar('is visible') ) {

          $('.ui.sidebar .close_layer a').click()

        }

      }

    })

})()
