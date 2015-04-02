angular.module("Eggly", [
  'categories',
  'categories.bookmarks'
  ])
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
  $scope.isCreating = false;
  $scope.isEditing = false;
  $scope.editedBookmark = null;

  $scope.setCurrentCategory = function(category) {
    $scope.currentCategory = category;
    $scope.cancelCreating();
    $scope.cancelEditing();
  }

  $scope.isCategoryNull = function() {
    return $scope.currentCategory === null;
  }

  $scope.isCurrentCategory = function(category) {
    return $scope.currentCategory && $scope.currentCategory.name === category.name
  }

  $scope.startCreating = function(){
    $scope.isCreating = true;
    $scope.isEditing = false;
    resetCreateForm();
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
    $scope.editedBookmark = null;
  }

  $scope.shouldShowCreating = function(){
    return $scope.currentCategory && !$scope.isEditing;
  }

  $scope.shouldShowEditing = function(){
    return $scope.isEditing && !$scope.isCreating;
  }

  function resetCreateForm(){
    console.log('resetCreateForm');
    $scope.newBookmark = {
      title: '',
      url: '',
      category: $scope.currentCategory.name
    }
  }

  $scope.createBookmark= function(bookmark) {
    console.log('createBookmark');
    bookmark.id = $scope.bookmarks.length;
    $scope.bookmarks.push(bookmark);
    resetCreateForm();
  }

  $scope.setEditedBookmark = function(bookmark){
    $scope.editedBookmark = angular.copy(bookmark);
  }

  $scope.updateBookmark = function(bookmark) {
    var index = _.findIndex($scope.bookmarks, function(b) {
      return b.id == bookmark.id;
    });
    $scope.bookmarks[index] = bookmark;
    $scope.editedBookmark = null;
    $scope.isEditing = false;
  }

  $scope.isSelectedBookmark = function(bookmarkId) {
    return $scope.editedBookmark && $scope.editedBookmark.id === bookmarkId;
  }

  $scope.deleteBookmark = function(bookmark) {
    _.remove($scope.bookmarks, function(b) {
      return b.id == bookmark.id;
    })
  }
});
