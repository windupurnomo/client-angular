app.controller("FormCtrl", function ($scope, $http, $state, config){
	var url = config.url + "/customer";
	$scope.form = {};
	
	$scope.save = function (){
		var data = angular.copy($scope.form);
		var encode = btoa("windu:windu");
		$http.defaults.headers.common['Authorization'] = 'Basic ' + encode;
		$http.post(url, data).then(function (res){
			$scope.form = {};
			$state.go("home");
		}, function (res){
			alert("error...");
		});
	};
});


app.controller("LoginCtrl", function ($scope, $http, $state, config){
	$scope.login = function (){
		
	}
})