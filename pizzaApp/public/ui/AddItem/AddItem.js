angular.module('ui').controller('AdditemCtrl',function($scope,pizzaService){
$scope.additem = function additem(item){
       console.log($scope.item);
       var pic = document.getElementById('image').files[0];
       $scope.item.image = pic.name;
              pizzaService.additem($scope.item,function(status){
                      $scope.status=status;

              });
              //$location.path("/login");
      };

});

