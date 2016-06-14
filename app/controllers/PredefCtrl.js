app.controller("PreloadCtrl", function(StarterCards, $scope){
	console.log("PreloadCtrl loaded");
	$scope.searchActivityCards = "";
	$scope.activities = [];

	$scope.activityCards = []

	$scope.searchActivities = function(){
		console.log("searchActivities");
		$scope.activities = activitySet;
	StarterCards.getCards($scope.searchActivityCards);
	$scope.activities = activitySet
	}
	});