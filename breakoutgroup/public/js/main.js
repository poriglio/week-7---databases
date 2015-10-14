angular.module("bassApp",[])

angular.module("bassApp").controller("bassController",["$scope","$http",function($scope,$http){

	$scope.greeting = "Home Bass"
	$scope.beats = []
	$scope.newBeat = {}

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
			$scope.beatsForm = true
			$scope.personalGreeting = true
		}
		$http.get("/api/beats").then(function(returnData){
				$scope.beats = returnData.data
			})
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
		$scope.beatsForm = true
	}

	// ng-ifs create their own scope, whereas hide and show do not, SOOOOO make sure to instantiate $scope objects when using ng-if

	$scope.postBeat = function () {
		$http.post("/api/beats",$scope.newBeat).then(function(returnData){
			console.log("After Post: ", returnData)
			$scope.beats.push(returnData.data)
			$scope.newBeat = {}
		},
		function(err){
			console.log("Error!")
		})
	}


}])

angular.module("bassApp").controller("pictureController",["$scope","$http",function($scope,$http){

	// We want to find an individual beat...
	$scope.greeting = "da beat"
	beatID = window.location.pathname.split("/")[2]

	$http.get("/api/beats/" + beatID).then

}])

// A cookie is a small piece of text a server can leave on a browser.