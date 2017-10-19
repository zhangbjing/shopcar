/**
 * Created by ��� on 2017/10/10.
 */
app.factory('tabServer', ['ajaxServer', function(ajaxServer){
    var factory = {
        getUserInfo:function(){
            var userInfo = ajaxServer.ajax('get', 'http://localhost:8080/?tab');
            return userInfo;
        }
    };
    return factory;
}]);