angular.module('ui').controller('MenudisplayCtrl',function($scope,pizzaService,$location){
	$scope.cartvalue = pizzaService.getCart();
	pizzaService.getitem(function(data){
                      $scope.pizzas=data;
                      console.log($scope.pizzas);

              });
	$scope.order = function(product){
		console.log("pdct",product);
		pizzaService.set(product);
		$location.path('/userDetails');
	};
	$scope.addtocart=function(pizza){

       $scope.cartvalue = pizzaService.setcart();
       pizzaService.addtocart(pizza);
       console.log($scope.cartvalue);
};

$scope.cartdisplay = function cartdisplay(){
		$location.path('/cartDetails');
};


		 
});