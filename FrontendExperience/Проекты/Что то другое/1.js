// const dark=document.getElementsByTagName("section")
  $(document).ready(function(){
    $('.menu-btn').on('click', function() {
        // e.preventDefault();
        $('.menu').toggleClass('menu_active');

      })
      $('.dark_mode').on('click',function(){
        $('header').toggleClass('back');
        $('aside').toggleClass('back');
        $('body').toggleClass('back');
        // $('.pause').toggleClass('back');
        $('.about-me').toggleClass('dark');
        $('.about_where').toggleClass('dark');
        $('.project').toggleClass('dark');
        $('.exp').toggleClass('dark');
        $('.skill').toggleClass('dark');
        $('.rev').toggleClass('dark');
        $('.language').toggleClass('dark');
        // $('.about-me').toggleClass('dark');
      })
  //  $('.dark-mode').off('click',function(){
  //   $('.menu').css("background-color","#383434");

  //  })
      
});