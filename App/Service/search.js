/**
 * Created by ��� on 2017/10/13.
 */
app.factory('searchServics', ['ajaxServer', function(ajaxServer){
    var factory = {
        getUserInfo:function(){
            var userInfo = ajaxServer.ajax('get', 'http://localhost:8080/?search');
            return userInfo;
        }
    }
    return factory;
}]);