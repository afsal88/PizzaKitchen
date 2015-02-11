angular.module('ui').controller('SignupCtrl',function($scope,pizzaService,$location){
$scope.submit = function submit(user){
       console.log($scope.user);
              pizzaService.register($scope.user,function(status){
                      $scope.status=status;
              });
              $location.path("/login");
      };

});