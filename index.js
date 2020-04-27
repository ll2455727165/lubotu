$(function () {
    //当前图片索引
    var index = 0;
    //获取banner宽度
    var width = $('.banner').width();
    //通过图片索引切换轮播图
    $('.indexs>span').on('click', function () {
        if ($(this).hasClass('active')) {
            return false;
        }
        $(this).addClass('active').siblings().removeClass('active');
        index = $(this).index();
        $('.list').animate({
            left: -index * width
        }, 300)

    })
    //控制左右箭头显示和隐藏
    $('.banner').hover(function () {
        $('.arrow').fadeIn(300)
        clearInterval(timer)
        timer=null;
    }, function () {
        $('.arrow').fadeOut(300)
        autoPlay(1000);

    })

    //下一张
    function next() {
        var left = parseFloat($('.list').css('left'));
        if (left % width != 0) {
            return;
        }
        if (index == 3) {
            index = 0;
            //显示第一张图片
            $('.list').css('left', 0)
        }
        index++;
        $('.list').animate({
            left: -index * width
        }, 300)

        $('.indexs>span').eq(index % 3).addClass('active').siblings().removeClass('active');
    }

    //下一张图片
    $('.r').on('click', function () {
        next();
    })

    //上一张图片
    $('.l').on('click', function () {
        var left = parseFloat($('.list').css('left'));
        if (left % width != 0) {
            return;
        }
        if (index == 0) {
            index = 3
            $('.list').css('left', -index * width)
        }
        index--;
        $('.list').animate({
            left: -index * width
        }, 300)

        $('.indexs>span').eq(index % 3).addClass('active').siblings().removeClass('active');

    })

    //自动轮播
    var timer=null;
    function autoPlay(duration){

        timer=setInterval(function(){
            next();
        },duration)
    }
autoPlay(1000);




})