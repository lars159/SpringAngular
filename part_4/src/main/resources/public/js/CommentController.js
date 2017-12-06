var app = angular.module('app', []) 

app.controller('CommentCtrl', function($scope, $http) {
     	 
 
   $http.get("api/comment").then(function(response){
   		$scope.comments =  ;
   });
  
    $scope.add = function() {	
    	$http.post("api/comment",  $scope.comment).then(
		 	
    };
      
 });

