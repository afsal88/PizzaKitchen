angular.module('ui', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('ui').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl: 'home/home.html'});
    $routeProvider.when('/SignUp',{templateUrl: 'SignUp/SignUp.html'});
   
    $routeProvider.when('/login',{templateUrl: 'login/login.html'});
    $routeProvider.when('/AddItem',{templateUrl: 'AddItem/AddItem.html'});
    $routeProvider.when('/MenuDisplay',{templateUrl: 'MenuDisplay/MenuDisplay.html'});
    $routeProvider.when('/userDetails',{templateUrl: 'userDetails/userDetails.html'});
    $routeProvider.when('/orderDetails',{templateUrl: 'orderDetails/orderDetails.html'});
    $routeProvider.when('/Delivery',{templateUrl: '/Delivery.html'});
    $routeProvider.when('/cartDetails',{templateUrl: 'cartDetails/cartDetails.html'});
    $routeProvider.when('/adminHome',{templateUrl: 'adminHome/adminHome.html'});
    $routeProvider.when('/checkout',{templateUrl: 'checkout/checkout.html'});
    $routeProvider.when('/ViewOrder',{templateUrl: 'ViewOrder/ViewOrder.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('ui').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
