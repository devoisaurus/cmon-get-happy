app.factory("StarterCards", function($q, $http){

	var getCards = function(){
		$http.get("data/activities.json")
		.success(function(ac){
			console.log(activityCardSet);
			var activityCollection = activityCardSet;

		})
	}
	return {getCards:getCards}
})