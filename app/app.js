"use strict"

var app = angular.module("GetHappy", ["ngRoute"])
.constant("firebaseURL", "https://cmon-get-happy.firebaseio.com/");


// let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
//   if(AuthFactory.isAuthenticated()){
//     console.log("User is authenticated, resolve route promise");
//     resolve();
//   } else {
//     console.log("User is not authenticated, reject route promise");
//     reject();
//   }
// })


app.config(function($routeProvider){
	$routeProvider.
    when('/',{
      templateUrl: 'partials/all-cards.html',
      controller: 'PredefCtrl'
      // resolve: {isAuth}
      // }).
		// when('/cards/list',{
		// 	templateUrl: 'partials/all-cards.html',
		// 	controller: 'PredefCtrl'
  //     // resolve: {isAuth}
    	// }).
    	// when('/cards/new', {
     //  		templateUrl: 'partials/new-card.html',
     //  		controller: 'CreateCardCtrl',
     //      resolve: {isAuth}
    	// }).
    	// when('/cards/user', {
     //  		templateUrl: 'partials/user-cards.html',
     //  		controller: "UserCardCtrl",
     //      resolve: {isAuth}
     //  }).
      // when('/login', {
      //   templateUrl: 'partials/login.html',
      //   controller: "LoginCtrl"
      // }).
      // when('/logout', {
      //   templateUrl: 'partials/login.html',
      //   controller: "LoginCtrl"
      }).
    	otherwise('/');
});


app.run(($location, firebase) => {
  let getHappyRef = new Firebase("https://cmon-get-happy.firebaseio.com/");

  // getHappyRef.onAuth(authData => {
  //   if(!authData){
  //     $location.path("/login");
  //   }
  // })
})