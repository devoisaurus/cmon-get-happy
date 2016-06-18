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

	$scope.addCard = function(){
		console.log("activities", $scope.activities);
		var activitiesObject =
			JSON.stringify({
					activity: $scope.activities.activity,
					cost: $scope.activities.cost,
					time: $scope.activities.time,
					location: $scope.activities.location,
					description: $scope.activities.description
				})
		console.log("activitiesfire", activitiesObject);
		StarterCards.addCardToFirebase(activitiesObject)
		.then(function successCallback(response){
		console.log("clicked");
		});
	}
	}]);