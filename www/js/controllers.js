angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('loggedInHomeCtrl', function($scope) {
$scope.welcome="Welcome To FeedLar";

$scope.upload = function(){
    alert($scope.headline);
};
})

.controller("ListCtrl", function($scope, Items) {

  $scope.data = Items;

  $scope.addItem = function() {
   
      $scope.data.$add({
        "name": $scope.name,
        "headline": $scope.headline,
        "description": $scope.desc
      });
  };
})
 