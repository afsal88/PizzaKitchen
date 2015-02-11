angular.module('ui').factory('pizzaService',function($http) {

	var pizzaService = {
		itemdata:{},
		userdata:{},
		cartdata:0,
		cartdetails:[],

		register: function(user,callback){
                       $http({ method:'POST',
                               data:user,
                               headers: {'Content-Type': 'application/json'}, 
                               url:'http://localhost:3000/registration' 
                                                             
                       }).success(function (data) {                        
                   callback(data);                
               });

               },

         login : function(userData,callback){
				console.log(userData);
						$http({ method:'POST',
                               data:userData,
                                headers: {'Content-Type': 'application/json;charset=UTF-8'},
                               url:'http://localhost:3000/signin'                                
                       }).success(function (data) {                         
                   callback(data);                
               });
		},

		logStatus:0,
		setLogStatus:function(){
                       pizzaService.logStatus = 1;
        },

		getLogStatus:function(){
                return pizzaService.logStatus;
        },

		currentUserData:{},
        setUserData : function(user){
                  pizzaService.currentUserData = user;
                  console.log(pizzaService.currentUserData);
        },
        getUserData:function(callback){
                    callback(pizzaService.currentUserData);
        },

		additem:function(item,callback){
					$http({method :'POST',
						data :item,
						 headers: {'Content-Type': 'application/json;charset=UTF-8'},
                         url:'http://localhost:3000/newitem' 
                     }).success(function (data) {                        
                   callback(data);                
               });
		},
		getitem:function(callback){
						$http({method :'GET',
						headers: {'Content-Type': 'application/json;charset=UTF-8'},
                         url:'http://localhost:3000/getitem' 
                     }).success(function (data) {                        
                   callback(data);                
               });
		},
		insertOrder:function(order,callback){	
			$http({method :'POST',
							data :order,
							 headers: {'Content-Type': 'application/json;charset=UTF-8'},
	                         url:'http://localhost:3000/order' 
	                     }).success(function (data) {                        
	                   callback(data);                
	               });		
						
		},
		adminView:function(callback){
			$http({method :'GET',
							 headers: {'Content-Type': 'application/json;charset=UTF-8'},
	                         url:'http://localhost:3000/viewall' 
	                     }).success(function (data) {                        
	                   callback(data);                
	               });		
						
		},
		getCart:function(){
				return(pizzaService.cartdata);
		},
		setcart:function(){
           pizzaService.cartdata++;
           console.log("Cart",pizzaService.cartdata);
           return pizzaService.cartdata;

         },
		set:function(pizza){
			pizzaService.itemdata = pizza;
			console.log(pizzaService.itemdata);
		},
		get: function(callback){
			callback(pizzaService.itemdata);
		},
		setDeliveryAddress:function(user){
			pizzaService.userdata = user;
			console.log(pizzaService.userdata);
		},

		
		getDeliveryAddress:function(callback){
			callback(pizzaService.userdata);
		},
		
         addtocart:function(pizza){
			pizzaService.cartdetails[pizzaService.cartdata - 1] = pizza;
			console.log("addtocart");
			console.log(pizzaService.cartdetails);
         },
         getCartDetails:function(){
		console.log(pizzaService.cartdetails);
		 return(pizzaService.cartdetails);
         }


      };

	return pizzaService;
});

