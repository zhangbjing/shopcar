/**
 * Created by ��� on 2017/10/13.
 */
app.controller('searController', ['$scope', 'searchServics', function($scope, searchServics){
    searchServics.getUserInfo().then(function(result){
        $scope.sets = result;
    });
    $scope.sortFlag = {
        sortName: 'id',
        id: false,
        name: false,
        price:false
    };
    $scope.sortDir = false;
    $scope.sort = function(val){
        switch(val) {
            case 'id':
                $scope.sortFlag.num = !$scope.sortFlag.id;
                break;
            case 'name':
                $scope.sortFlag.name = !$scope.sortFlag.name;
                break;
            case 'price':
                $scope.sortFlag.pice = !$scope.sortFlag.price;
                break;
        }
        $scope.sortFlag.sortName = val;
        $scope.sortDir = !$scope.sortDir;
    };
    $scope.delete = function(value){
        for(var i=0;i<$scope.sets.length;i++){
            if($scope.sets[i].id === value) {
                $scope.sets.splice(i,1);
            }
        }
    };
    $scope.ipt = '';
    $scope.change = function(val){
        var arr = val.split(',');
        var obj = {};
        obj.id = arr[0];
        obj.name = arr[1];
        obj.price = arr[2];
        $scope.sets.push(obj)
    }
    //$scope.order = 'number';
    //$scope.dir = false;
    //$scope.orderChange = function(order) {
    //    $scope.order = order;
    //    $scope.dir = !$scope.dir;
    //};
    ////模糊查询
    //$scope.info = '';
    //$scope.flag = false;
    //$scope.iptChange = function() {
    //    if ($scope.info === '') {
    //        $scope.flag = false;
    //    }
    //    $scope.flag = true;
    //}
}]);