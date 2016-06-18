app.factory("StarterCards", function($q, $http){


	var getCards = function(activities) {
		var activities = [];
			return $q(function(resolve, reject){
				$http.get("https://cmon-get-happy.firebaseio.com/activities.json")
				.success(function(data){
			 resolve(data);
				}, function(error){
			reject(error);
				});
			});
		};
		var addCardToFirebase = (function(activities){
			console.log("activitiesfire", activities);
			return $q(function(resolve,reject){
				$http.post(`https://cmon-get-happy.firebaseio.com/activities.json`)
				.success(function(objectFromFirebase){
					resolve(objectFromFirebase)
				}
				);
			});
		}
	)

	return {getCards:getCards, addCardToFirebase:addCardToFirebase};
});