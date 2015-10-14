angular.module("bassApp",[])

angular.module("bassApp").controller("bassController",["$scope","$http",function($scope,$http){

	$scope.greeting = "Home Bass"

	// We want to see if the user is logged in:
	$http.get('/whoami').then(function(returnData){
		var sessionObj = returnData.data
		if(!sessionObj.username){
			$scope.loginForm = true
		}
		else{
			$scope.user = {
				name : returnData.data.username
			}
			$scope.personalGreeting = true
		}
	})

	$scope.loginUser = function (){
		$scope.loginForm = false
		$scope.personalGreeting = true
		$http.post("/iamwho",{ username: $scope.username}).then(function(returnData){
			console.log("After login: ", returnData)
			$scope.user = {
				name : returnData.data.username
			}
		})
	}


}])

// A cookie is a small piece of text a server can leave on a browser.