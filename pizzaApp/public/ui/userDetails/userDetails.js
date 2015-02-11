angular.module('ui').controller('UserdetailsCtrl',function($scope,pizzaService,$location){
	$scope.update = function update(user){
	pizzaService.setDeliveryAddress(user);
	$location.path("/orderDetails");
	};

});