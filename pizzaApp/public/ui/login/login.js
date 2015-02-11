angular.module('ui').controller('LoginCtrl',function($scope,pizzaService,$location){

		//$scope.cartvalue = pizzaService.getCart();
	$scope.login = function login(email,password){
		console.log(email);
	$scope.userData = {
					email:$scope.email,
					password:$scope.password
	};
	console.log($scope.email,$scope.password);
	if($scope.email === "admin@gmail.com" && $scope.password === "admin123"){
		$location.path('/adminHome');
	}
	else{
		 pizzaService.login($scope.userData,function(data){
         $scope.data =data;                                
         if($scope.data.length === 0 ){
				$scope.label="Incorrect username or password";
				$location.path("/login");
                                                                                                               
        }else{                                                        
					$scope.label="";
					pizzaService.setLogStatus();
                    pizzaService.setUserData($scope.data[0]);                                                                
                    $location.path("/home");                        
             }

           });
    }

   
};

});




// angular.module('pizzApp').controller('LoginCtrl',function($scope,services,$location){
//        services.getCart(function(cart){
//                        $scope.cart = cart;
//                });
//        $scope.login =function login(username,password){
                       
//                                $scope.loginData= {
//                                                                email: $scope.username,
//                                                                password:$scope.password
//                                                                  };
//                                                                  console.log($scope.username,$scope.password)
//                                        if($scope.username === "admin@gmail.com" && $scope.password === "admin123"){
//                                                $location.path("/adminHome");
//                                        }else{
//                                                services.login($scope.loginData,function(data){
//                                                            $scope.data =data;                                
                                                       
//                                                                if($scope.data.length === 0 ){
//                                                                        $scope.label="Incorrect username or password";
//                                                                                $location.path("/login");
                                                                                                               
//                                                                }else{                                                        
//                                                                                $scope.label="";
//                                                                                services.setLogStatus();
//                                                                                services.setUserData($scope.data[0]);                                                                
//                                                                                $location.path("/userHome");                        
//                                                                        }
//                                                });
//                        }
//        };
//        $scope.viewCart = function(){
//                services.getCartItems(function(cartData){
//                        $scope.cartData = cartData;                        
//                });
//                $location.path('/viewcart');
//        };
// });




