app.controller("PredefCtrl", ["$scope", "StarterCards",
 function($scope, StarterCards){

	$scope.getActivities = function(){
	StarterCards.getCards($scope.activities)
	.then(function(data){
	$scope.activities = [];
	for (var key in data)
		data[key].id = key
	$scope.activities.push(data[key]);
	console.log("activities", data);
	});
	};
	$scope.getActivities();
	}]);