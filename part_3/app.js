var app = angular.module('todoApp', [])

app.controller('TodoListController', function($scope) {
 
    $scope.todos = [
      {text:'learn AngularJS' },
      {text:'build an AngularJS app' }];
 
    $scope.addTodo = function() {
      var t ={text:$scope.todoText };
  
  
    
      $scope.todoText = '';
    };
 
  });