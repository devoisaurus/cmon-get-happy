app.controller("PredefCtrl", ["$scope", "StarterCards",
 function($scope, StarterCards){
	console.log("PreloadCtrl loaded");
	$scope.parseActivityCards = "";
	$scope.activities = [{
		name: "",
		time: "",
		cost: "",
		location: "",
		description: ""
	}];


	$scope.searchActivities = function(){
		console.log("searchActivities");
	StarterCards.getCards($scope.parseActivityCards)
	.then(function(activitySet){
	$scope.activities = activitiess;
	});
	};
	}]);