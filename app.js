angular.module("Bookmarks", [])
.controller("MainController", function($scope) {
  $scope.categories = [
    {name: 'Work'},
    {name: 'Play'},
    {name: 'Art'},
    {name: 'Kids'}
  ]
  $scope.bookmarks = [
    {name: 'AngularJS', url: 'https://angularjs.org/'},
    {name: 'Google', url: 'https://google.com'},
    {name: 'Turtles', url: 'https://www.google.com/search?q=turtles'},
    {name: 'Georgia', url: 'https://en.wikipedia.org/wiki/Georgia_(U.S._state)'},
    {name: 'Google News', url: 'https://news.google.com/'},
  ]
});
