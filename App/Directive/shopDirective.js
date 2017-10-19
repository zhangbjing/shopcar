/**
 * Created by ��� on 2017/10/17.
 */
app.directive('shop', function(){
    return {
        replace: false,
        scope: {
          item: "=item",
            index: "@index"
        },
        templateUrl: './App/View/temp/shopWorld.html',
        controller: 'shopCarItemController',
        link: function(scope, ele, attr, controller){

        }
    }
});