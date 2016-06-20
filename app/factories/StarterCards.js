app.factory("StarterCards", function($q, $http){


	var getCards = function(activities) {
		var activities = [];
			return $q(function(resolve, reject){
				$http.get("https://cmon-get-happy.firebaseio.com/activities.json")
				.success(function(activitiesObject){
			   var activityList = activitiesObject;
			   Object.keys(activityList).forEach(function(key){
			   	activityList[key].id = key;
			   	activities.push(activityList[key]);
			   });
			   resolve(activities);
				})
				.error(function(error){
					reject(error)
				});
			});
		};

		var addCardtoFirebase = function(activity){
			return $q(function(resolve, reject){
				$http.post("https://cmon-get-happy.firebaseio.com/activities.json",
					JSON.stringify(activity)
				)
			.success(
				function(objectFromFirebase){
					resolve(objectFromFirebase);
				}
				);
			});
		};

	return {getCards:getCards, addCardtoFirebase:addCardtoFirebase};
});