/**
 * Created by ��� on 2017/10/11.
 */
app.factory('ajaxServer', ['$http', '$q', function($http, $q){
    return {
        ajax:function(type, url){
            var def = $q.defer();
            $http({
                url: url,
                method: type
            }).success(function(data){
                def.resolve(data);
            }).error(function(err){
                def.reject(err);
            });
            return def.promise;
        }
    }
}]);