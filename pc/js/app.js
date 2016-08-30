$(function () {

    (function () {
        var st = $(document).scrollTop();

        toggleHd(st);

        function toggleHd(h) {
            if (h >= 60) {
                $('.j-header-other').addClass('m-header2');
            } else {
                $('.j-header-other').removeClass('m-header2');
            }
        }

        $(window).scroll(function () {
            st = $(document).scrollTop();
            toggleHd(st);
        });
    })();

    //(function () {
    //    var st = $(document).scrollTop();
    //    console.log(st);
    //    $('body').mousewheel(function (event, delta) {
    //        //console.log(event, delta);
    //        //console.log('pageX: ' + event.pageX + ' pageY: ' + event.pageY );
    //
    //        if (delta == -1) {
    //            if (st == 0) {
    //                var $top = $('.j-top');
    //                $('.j-header').addClass('m-header2');
    //                if ($top.length) {
    //                    $top.hide();
    //                }
    //                return false;
    //            }
    //        }
    //
    //    });
    //})();

    // 顶部导航样式切换
    //(function () {
    //    var h = document.documentElement.clientHeight || document.body.clientHeight;
    //    var st = $(document).scrollTop();
    //    var bScroll = true;
    //    var timer = null;
    //    var isShowTop = (st <= 0) ? true : false;
    //
    //
    //
    //
    //    toggleHd(st);
    //
    //    function toggleHd(h) {
    //        var $top = $('.j-top');
    //        if (h >= 60) {
    //            $('.j-header').addClass('m-header2');
    //            if ($top.length) {
    //                $top.hide();
    //            }
    //        } else {
    //            $('.j-header').removeClass('m-header2');
    //            if ($top.length) {
    //                $top.show();
    //            }
    //        }
    //    }
    //
    //    $('body').mousewheel(function (event, delta) {
    //        //console.log(event, delta);
    //        //console.log('pageX: ' + event.pageX + ' pageY: ' + event.pageY );
    //        event.preventDefault();
    //        if (bScroll) {
    //            bScroll = false;
    //            timer = setTimeout(function(){
    //                bScroll = true;
    //            }, 1000);
    //
    //            if (delta == -1) {  // 向下滚动
    //                if (isShowTop) {
    //                    var $top = $('.j-top');
    //                    $('.j-header').addClass('m-header2');
    //                    if ($top.length) {
    //                        $top.hide();
    //                    }
    //                    st = $(document).scrollTop();
    //                    isShowTop = false;
    //                    return false;
    //                }
    //
    //            } else if (delta == 1) { // 向上滚动
    //                st = $(document).scrollTop();
    //                console.log(st);
    //                if(st <= 0){
    //
    //                    var $top = $('.j-top');
    //                    $('.j-header').removeClass('m-header2');
    //                    if ($top.length) {
    //                        $top.show();
    //                    }
    //                    isShowTop = true;
    //                    //return false;
    //                }
    //            }
    //
    //
    //
    //        }
    //
    //    });
    //
    //    //$(window).scroll(function () {
    //    //    st = $(document).scrollTop();
    //    //    toggleHd(st);
    //    //});
    //})();

    // 设置section高度 -》 屏幕高度
    //function setPageHeight() {
    //    var h = document.documentElement.clientHeight || document.body.clientHeight;
    //    var $pageh = $('.pageh');
    //
    //    $pageh.css('height', h);
    //
    //}
    //
    //setPageHeight();


});