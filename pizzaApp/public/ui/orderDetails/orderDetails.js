angular.module('ui').controller('OrderdetailsCtrl',function($scope,pizzaService,$location){
	pizzaService.get(function(data){
		$scope.itemdata=data;
		console.log("get");
		console.log($scope.itemdata);
	});
	pizzaService.getDeliveryAddress(function(data){
		$scope.userdata=data;
		console.log("getdelivery");
		console.log($scope.userdata);
		});
	$scope.orders = {};
	$scope.itemdata.quantity = 1;
	console.log($scope.orders);
	$scope.checkout = function checkout(){
       
               $scope.orders.user = $scope.userdata;
               $scope.orders.pizza = [$scope.itemdata];
               $scope.orders.amount = $scope.itemdata.quantity*$scope.itemdata.price;

               $scope.orders.date = new Date();
               console.log($scope.orders);
               pizzaService.insertOrder($scope.orders,function(data){
                      $scope.data=data;
       });
               $location.path('/Delivery');
};




});