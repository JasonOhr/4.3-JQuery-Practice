(function(){
  'use strict';
    function openPanels(){
      $('.my-files .tasks').slideDown();
    }
  $(document).ready(function(){
    $('body').prepend(JST['application']());
    var $category = $('li.category');
    var panels = $('.accordion  li.tasks').hide();
    openPanels();
    $category.hover(function(){
      $(this).addClass('temp-active');
    }, function (){
          $(this).removeClass('temp-active');
        }
    );
    $category.click(function(){
      var $this = $(this);

      if($this.hasClass("active")){
        console.log($this);
        $this.removeClass('active').addClass('in-active')
        panels.slideUp();
      }else {
        console.log('im here ',$this);
        panels.slideUp();
        $('.category.active').removeClass('active').addClass('in-active');
        panels.slideUp();
        $this.removeClass('in-active').addClass('active')
            $this.siblings().slideDown();
      }
    });

  });

})();
