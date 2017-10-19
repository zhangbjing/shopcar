/**
 * Created by ��� on 2017/10/9.
 */
app.controller('tabController', ['$scope', '$location', '$window', '$timeout', '$interval', 'tabServer', function($scope, $location, $window, $timeout, $interval, tabServer){
    tabServer.getUserInfo().then(function(resule){
       $scope.tabs = resule;
    });
    //$http({
    //    method: 'get',
    //    url: './data/data.json'
    //}).then(function(data){
    //    $scope.tabs = data.data;
    //}, function(error){
    //    console.log(error)
    //});
    //$http.get('./data/data.json').then(function(data){
    //    $scope.tabs = data.data;
    //});
    //$http.post('./data/data.json').then(function(data){
    //    $scope.tabs = data.data;
    //})
    //$scope.gogo = function(){
    //    //$window.location.href = 'http://www.baidu.com';
    //    console.log($location.absUrl());//完整url
    //    console.log($location.path());//路由地址
    //    console.log($location.search());//url参数
    //    console.log($location.host());//url域名
    //    console.log($location.port());//url端口号
    //    console.log($location.hash());//hash值
    //    console.log($location.protocol());
    //    $timeout(function(){
    //        $window.location.href = 'http://www.baidu.com'
    //    },2000)
    //};
    //var timer = $interval(function(){
    //    $scope.theTime = new Date().toLocaleTimeString();
    //});
    //$timeout(function(){
    //    $interval.cancel(timer);
    //},5000);
    //$scope.curUrl = $location.absUrl();
    //$scope.active = "active";
}]);