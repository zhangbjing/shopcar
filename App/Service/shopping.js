/**
 * Created by ��� on 2017/10/17.
 */
app.factory('shopService', ['ajaxServer', function(ajaxServer){
    var factory = {
        getUserInfo:function(){
            var userInfo = ajaxServer.ajax('get', 'http://localhost:8080/?shopping');
            return userInfo;
        }
    }
    return factory;
}]);