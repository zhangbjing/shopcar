/**
 * Created by ��� on 2017/10/11.
 */
app.directive('logo', function($timeout, $interval){
    return {
        restrict: 'EA',
        replace: false,
        //scope: {
        //    sayBye: '&bye'
        //},
        templateUrl: './App/View/temp/logoWorld.html',
        controller: 'logoController',
        link: function(scope, ele, attr, controller){
            $timeout(function(){
                var width = $('ul li').width();
                var len = $('ul li').length;
                $('ul').width(width*len);
                var count = 0;
                var timer = $interval(function(){
                    count++;
                    if(count>len-1){
                        count = 0;
                    }
                    $('ul li').eq(count).show().siblings().hide();
                    $('ol li').eq(count).addClass('bg').siblings().removeClass('bg');
                },1000)
                $('ol li').on('click', function(){
                    var idx = $(this).index();
                    $('ul li').eq(idx).show().siblings().hide();
                    $(this).addClass('bg').siblings().removeClass('bg');
                });
                $('.logoBox').on('mouseover', function(){
                    $interval.cancel(timer)
                });
                $('.logoBox').on('mouseout', function(){
                    timer = $interval(function(){
                        count++;
                        if(count>len-1){
                            count = 0;
                        }
                        $('ul li').eq(count).show().siblings().hide();
                        $('ol li').eq(count).addClass('bg').siblings().removeClass('bg');
                    },1000)
                });
                $('.left').on('click', function(){
                    count--;
                    if(count<0){
                        count = len - 1;
                    }
                    $('ul li').eq(count).show().siblings().hide();
                    $('ol li').eq(count).addClass('bg').siblings().removeClass('bg');
                });
                $('.right').on('click', function(){
                    count++;
                    if(count>len-1){
                        count = 0;
                    }
                    $('ul li').eq(count).show().siblings().hide();
                    $('ol li').eq(count).addClass('bg').siblings().removeClass('bg');
                });
            },1000);

        }
    }
});