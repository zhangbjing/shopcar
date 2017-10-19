/**
 * Created by ��� on 2017/10/11.
 */
app.factory('logoServer', ['ajaxServer', function(ajaxServer){
    var factory = {
        getUserInfo:function(){
            var userInfo = ajaxServer.ajax('get', 'http://localhost:8080/?data');
            return userInfo;
        }
    };
    return factory;
}]);