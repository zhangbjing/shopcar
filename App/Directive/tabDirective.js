/**
 * Created by Äã²Â on 2017/10/9.
 */
app.directive('tab', function(){
    return {
        replace: false,
        templateUrl: './App/View/temp/tabWorld.html',
        controller: 'tabController',
        link: function(scope, ele, attr, controller){
            $('div').on('click', 'p', function(){
                var index = $(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                $(ele).find('.ols div').eq(index).show().siblings().hide();
            })
        }
    }
});