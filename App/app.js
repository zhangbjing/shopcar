/**
 * Created by ��� on 2017/10/11.
 */
//var app = angular.module('myApp', ['ngRoute']);
//app.config(function($routeProvider){
//    $routeProvider
//        .when('/logo/:1',{
//            templateUrl:'App/View/logo.html',
//            controller:'logoController'
//        })
//        .when('/pull/:2',{
//            templateUrl:'App/View/pull.html',
//            controller:'pullController'
//        })
//        .when('/tab/:3',{
//            templateUrl:'App/View/tab.html',
//            controller:'tabController'
//        })
//        .otherwise({
//            redirectTo:'/logo'
//        })
//        //.otherwise({
//        //    redirectTo:'/pull'
//        //})
//});
var app = angular.module('myApp', ['ui.router']);
app.config(function($stateProvider){
    $stateProvider
        .state('/logo', {
            url: '/logo',
            templateUrl: 'App/View/logo.html',
            controller: 'logoController'
        })
        .state('/pull', {
            url:'/pull',
            templateUrl: 'App/View/pull.html',
            controller: 'pullController'
        })
        .state('/tab', {
            url: '/tab',
            templateUrl: 'App/View/tab.html',
            controller: 'tabController'
        })
        .state('/search', {
            url: '/search',
            templateUrl: 'App/View/search.html',
            controller: 'searController'
        })
        .state('/shop', {
            url: '/shop',
            templateUrl: 'App/View/shop.html',
            controller: 'shopController'
        })
});