var app = angular.module('app', ['ngResource']);

  
app.controller('CommentController', function($scope , $resource, $http) {
      
	var commentResource = $resource('/api/comment/:commentId', {commentId:'@id'});
    
    $scope.comments = commentResource.query();
    
    $scope.save = function (t){
        commentResource.save({name : $scope.myComment, trafficId : t.id})
    }
    
    
  
    $http.get("http://api.sr.se/api/v2/traffic/messages?format=json").then(function(response) {
        $scope.traffic = response.data.messages;
    });
 
	
});

