$(function () {

    // 顶部导航样式切换
    (function(){
        var st = $(document).scrollTop();

        toggleHd(st);

        function toggleHd(h) {
            var $top = $('.j-top');
            if (h >= 60) {
                $('.j-header').addClass('m-header2');
                if($top.length){
                    $top.hide();
                }
            } else {
                $('.j-header').removeClass('m-header2');
                if($top.length){
                    $top.show();
                }
            }
        }

        $(window).scroll(function () {
            st = $(document).scrollTop();
            toggleHd(st);
        });
    })();

});