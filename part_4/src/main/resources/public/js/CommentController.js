var app = angular.module('app', []) 

app.controller('CommentCtrl', function($scope, $http) {
     	 
 
   $http.get("api/comment").then(function(response){
   		$scope.comments = response.data;
   });
  
    $scope.add = function() {	
    	$http.post("api/comment",  $scope.comment).then(
				function(response) {
					$scope.comments.push($scope.comment);
				});
		
    };
      
 });

