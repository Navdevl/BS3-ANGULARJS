var myApp = angular.module('myApp',['angularUtils.directives.dirPagination','angular.filter']);

myApp.controller('blogCtrl',function($scope,$http){
  $http.get('data/data.json').then(function(response){
    $scope.posts = response.data;
    $scope.cats = response.data.category;
    $scope.itemsPerPage = 3;
    $scope.pagedItems=[];
    $scope.pages = [];
    console.log($scope.posts.length===7);


  });

});
