angular.module('ui').controller('CartdetailsCtrl',function($scope,pizzaService,$location){

	$scope.cartitems = pizzaService.getCartDetails();
	for(var i = 0;i<$scope.cartitems.length;i++){
		$scope.cartitems[i].quantity = 1;
	}

	console.log($scope.cartitems);
	$scope.confirm = function confirm(){
		 $scope.valid = pizzaService.getLogStatus();
		if($scope.valid === 0){
		$location.path('/login');
		 }
		else{
		$location.path('/checkout');
		 }
	};

});