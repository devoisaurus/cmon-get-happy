app.factory("StarterCards", function($q, $http){


	var getCards = function(activities) {
		var activities = [];
			return $q(function(resolve, reject){
				$http.get("../data/activities.json")
				.success(function(data){
			 resolve(data);
				}, function(error){
			reject(error);
				});
			});
		};
	return {getCards:getCards};
});