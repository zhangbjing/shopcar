/**
 * Created by ��� on 2017/10/11.
 */
app.controller('logoController',['$scope', 'logoServer', function($scope, logoServer){
    logoServer.getUserInfo().then(function(resule){
       $scope.logos = resule;
    });
    //$scope.sayBye = function(){
    //    console.log(111)
    //}
}]);


//ngRouter获取参数:$routeParams
//uiRouter获取参数:$stateParams