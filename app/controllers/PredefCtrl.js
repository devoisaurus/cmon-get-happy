app.controller("PredefCtrl", ["$scope", "StarterCards",
 function($scope, StarterCards){
	$scope.activities = {
		name: "",
		time: "",
		cost: "",
		location: "",
		description: ""
	};


	$scope.getActivities = function(){
	StarterCards.getCards($scope.activities)
	.then(function(activitySet){
	$scope.activities = activitySet;
	});
	};
	$scope.getActivities();
	}]);