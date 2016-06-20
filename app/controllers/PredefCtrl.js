"use strict"

app.controller("PredefCtrl", function($scope, $http, StarterCards){
	$scope.activities = [];

	StarterCards.getCards().then(function(activityList){
		console.log("activityList from promise", activityList);
		$scope.activities = activityList
	})

$scope.addCard = function(activity){
	let selectedActivity = {
		cost:activity.cost,
		description:activity.description,
		location:activity.location,
		name:activity.name,
		public:true,
		time:activity.time
	}

	StarterCards.addCardtoFirebase(selectedActivity);
}
});