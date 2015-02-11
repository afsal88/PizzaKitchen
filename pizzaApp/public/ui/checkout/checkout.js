angular.module('ui').controller('CheckoutCtrl',function($scope,pizzaService,$location){
		$scope.itemdata = pizzaService.getCartDetails();
		$scope.itemdata.total = 0;
		for(var i=0;i<$scope.itemdata.length;i++){
               $scope.itemdata.total = $scope.itemdata.total + $scope.itemdata[i].quantity * $scope.itemdata[i].price;
		}
		console.log($scope.itemdata);
	pizzaService.getUserData(function(data){
		$scope.userdata=data;
		console.log("userdata");
		console.log($scope.userdata);
	});

	$scope.checkout = function(){
		$scope.orders = {};
		console.log("orders");
		$scope.orders.user = $scope.userdata;
		$scope.orders.pizza = $scope.itemdata;
		$scope.orders.amount =$scope.itemdata.total;
		$scope.orders.date = new Date();
		pizzaService.insertOrder($scope.orders,function(data){
			console.log(data);
		});
		$location.path('/Delivery');
	};
		
// 	$scope.checkout = function checkout(){
// 		$scope.orders = {};
//         console.log("order");
//                $scope.orders.user = $scope.userdata;
//                $scope.orders.pizza = [$scope.itemdata];
//                $scope.orders.amount = $scope.itemdata.total;

//                $scope.orders.date = new Date();

//                console.log($scope.orders);
//                pizzaService.insertOrder($scope.orders,function(data){
//                       $scope.data=data;
//        });
//                $location.path('/Delivery');
// };


});
