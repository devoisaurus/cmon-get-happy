app.factory("StarterCards", function($q, $http){

	var getCards = function(){
		return $q(function(resolve, reject){
		$http.get("data/activities.json")
		.success(function(activityCards){
			resolve(activityCards);
			}, function(error){
				reject(error);
			});
		});
	};
	return {getCards:getCards}
})