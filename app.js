angular.module("Bookmarks", [])
.controller("MainController", function($scope) {
  $scope.categories = [
    {id: 0, name: 'Work'},
    {id: 1, name: 'Play'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Kids'}
  ]
  $scope.bookmarks = [
    {id: 0, title: 'AngularJS', url: 'https://angularjs.org/', category: 'Work'},
    {id: 1, title: 'Google', url: 'https://google.com', category: 'Work'},
    {id: 2, title: 'Turtles', url: 'https://www.google.com/search?q=turtles', category: 'Play'},
    {id: 3, title: 'Georgia', url: 'https://en.wikipedia.org/wiki/Georgia_(U.S._state)', category: 'Art'},
    {id: 4, title: 'Google News', url: 'https://news.google.com/', category: 'Play'},
  ]

  $scope.currentCategory = null;

  $scope.setCurrentCategory = function(category) {
    $scope.currentCategory = category;
  }

  $scope.isCategoryNull = function() {
    return $scope.currentCategory === null;
  }

  $scope.isCurrentCategory = function(category) {
    return $scope.currentCategory && $scope.currentCategory.name === category.name
  }

  $scope.isCreating = false;
  $scope.isEditing = false;

  $scope.startCreating = function(){
    console.log('start creating')
    $scope.isCreating = true;
    $scope.isEditing = false;
  }

  $scope.startEditing = function(){
    $scope.isCreating = false;
    $scope.isEditing = true;
  }

  $scope.cancelCreating = function(){
    $scope.isCreating = false;
  }

  $scope.cancelEditing = function(){
    $scope.isEditing = false;
  }

  $scope.shouldShowCreating = function(){
    return $scope.currentCategory && !$scope.isEditing;
  }

  $scope.shouldShowEditing = function(){
    return $scope.isEditing && !$scope.isCreating;
  }
});
