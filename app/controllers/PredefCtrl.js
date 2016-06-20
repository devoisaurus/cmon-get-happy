app.controller("PredefCtrl", function($scope, $http, StarterCards){
	$scope.activities = [];

	StarterCards.getCards().then(function(activityList){
		console.log("activityList from promise", activityList);
		$scope.activities = activityList
	})

	StarterCards.addCardtoFirebase($scope.activities).then(function successCallback(response){
		console.log("activitiesadd", $scope.activities);
		console.log(response);
	})
});