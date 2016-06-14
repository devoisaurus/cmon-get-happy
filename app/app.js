var app = angular.module("GetHappy", []);

app.controller("NavigationCtrl", function($scope){
	$scope.navLinks = [{name: "Logout"}, {name: "Search for cards"}, {name: "View my cards"}]
});
