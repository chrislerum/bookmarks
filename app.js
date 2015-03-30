angular.module("Bookmarks", [])
.controller("MainController", function($scope) {
  $scope.categories = [
    {id: 0, name: 'Work'},
    {id: 1, name: 'Play'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Kids'}
  ]
  $scope.bookmarks = [
    {id: 0, name: 'AngularJS', url: 'https://angularjs.org/', category: 'Work'},
    {id: 1, name: 'Google', url: 'https://google.com', category: 'Work'},
    {id: 2, name: 'Turtles', url: 'https://www.google.com/search?q=turtles', category: 'Play'},
    {id: 3, name: 'Georgia', url: 'https://en.wikipedia.org/wiki/Georgia_(U.S._state)', category: 'Art'},
    {id: 4, name: 'Google News', url: 'https://news.google.com/', category: 'Play'},
  ]

  $scope.currentCategory = null;

  $scope.setCurrentCategory = function(category) {
    $scope.currentCategory = category;
  }

  $scope.isCurrentCategory = function(category) {
    return $scope.currentCategory && $scope.currentCategory.name === category.name
  }
});
