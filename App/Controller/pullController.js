/**
 * Created by ��� on 2017/10/10.
 */
app.controller('pullController', ['$scope','pullServer', function($scope,pullServer){
    pullServer.getUserInfo().then(function(result){
        $scope.pullBox = result;
    })
}]);