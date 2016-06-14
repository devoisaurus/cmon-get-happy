app.controller("PreloadCtrl", function(StarterCards, $scope){
	$scope.activities = [];

	StarterCards.getCards()
	.then(function(activitySet){
		$scope.activities = activitySet;
	})
});