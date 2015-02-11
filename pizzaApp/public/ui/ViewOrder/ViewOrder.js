angular.module('ui').controller('VieworderCtrl',function($scope,pizzaService){
	pizzaService.adminView(function(data){
		$scope.orders=data;
		console.log($scope.orders);
	});
	$scope.vieworders = function(order){
		$scope.pizzas =order.pizza;
		$scope.show = true; 
	};

});