app.factory("StarterCards", function($http, $q){

	var getCards = function(){
		return $q(function(resolve, reject){
		$http.get("../data/activities.json")
		.success(function(activityObject){
			console.log("success!");
			resolve(activityObject);
			console.log(activityObject);
			});
		});
	};
	return {getCards:getCards};
});