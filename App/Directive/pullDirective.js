/**
 * Created by ��� on 2017/10/10.
 */
app.directive('pull', function($timeout){
    return {
        replace: false,
        templateUrl: './App/View/temp/pullWord.html',
        controller: 'pullController',
        link: function(scope, ele, attr, controller) {
            $timeout(function(){
                $('.list').on('click', 'p', function(){
                    $(this).next().slideToggle(1000);
                    $(this).parent().siblings().children('div').slideUp(1000);
                })
            },1000)
        }
    }
});