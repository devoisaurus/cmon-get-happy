app.factory("StarterCards", function($q, $http){


	var getCards = function(activities) {
		var activities = [];
			return $q(function(resolve, reject){
				$http.get("../data/activities.json")
				.success(function(activityObject){
					console.log("activityObject", activityObject);
			var activitySet = activityObject;
				Object.keys(activitySet).forEach(function(key){
					activitySet[key].id = key;
					activities.push(activitySet[key])
					})
			 resolve(activities);
				}, function(error){
			reject(error);
				});
			});
		};
	return {getCards:getCards};
});