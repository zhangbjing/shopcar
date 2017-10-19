/**
 * Created by ��� on 2017/10/17.
 */
app.controller('shopController', ['$scope','shopService', function($scope,shopService){
    shopService.getUserInfo().then(function(result){
        $scope.productItems = result;
    });
    //合算
    function price(){
        $scope.goodsCount = 0;
        $scope.goodsPrice = 0;
        $scope.productItems.forEach(function(item){
           if (item.state){
               $scope.goodsCount += item.num;
               $scope.goodsPrice += item.num * item.price;
           }
        });
    };
    //删除
    $scope.$on('deleteItem', function(event, index){
        $scope.productItems.splice(index, 1);
        price();
    });
    //全选
    $scope.checkAll = function () {
        if (!$scope.flag) {
            $scope.flag = true;
            $scope.productItems.forEach(function(item, index){
                item.state = true;
            });
        } else {
            $scope.flag = false;
            $scope.productItems.forEach(function(item, index){
                item.state = false;
            })
        }
        price();
    };
    //单选
    $scope.$on('checkItem', function(event, index){
        var items = $scope.productItems;
        var count = 0;
        items[index].state = !items[index].state;
        for(var i=0;i<items.length;i++){
            if(items[i].state){
                count++;
            }
        }
        if(count==items.length){
            $scope.flag = true;
        }else{
            $scope.flag = false;
        }
        price();
    });
    $scope.$on('changeCount', function(){
        price();
    });
}]);