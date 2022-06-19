$(function(){
    $('#scroll').on('click', function(){
        var targetTop = $('#catchCopy').offset().top;
        //targetTopを表示
        $('#target_top span').html(targetTop);
        //するするスクロール
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });

    $('#navi_schedule').on('click', function(){
        var targetTop = $('#schedule').offset().top;
        //targetTopを表示
        $('#target_top span').html(targetTop);
        //するするスクロール
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });
    $('#navi_fare').on('click', function(){
        var targetTop = $('#fare').offset().top;
        //targetTopを表示
        $('#target_top span').html(targetTop);
        //するするスクロール
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });
    $('#navi_tram').on('click', function(){
        var targetTop = $('#tram').offset().top;
        //targetTopを表示
        $('#target_top span').html(targetTop);
        //するするスクロール
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });
});
